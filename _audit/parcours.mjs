/* Parcours propres à E-maginacoudre : filtres du catalogue (gardés dans l'adresse), choix d'une prestation à l'atelier
   (récapitulatif et lien prérempli), demande préremplie depuis une fiche machine, statut d'ouverture. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    /* Catalogue : un filtre de type puis de marque, compte affiché égal aux cartes visibles, adresse mise à jour. */
    await page.goto(BASE + '/machines', { waitUntil: 'load' });
    await attendrePret(page);
    await page.click('[data-filtre-type="surjeteuse"]');
    await attendre(500);
    let r = await page.evaluate(() => ({
      visibles: [...document.querySelectorAll('[data-catalogue] > li')].filter((li) => !li.classList.contains('est-cache')).length,
      types: [...new Set([...document.querySelectorAll('[data-catalogue] > li:not(.est-cache)')].map((li) => li.dataset.type))],
      compte: document.querySelector('[data-compte]').textContent, url: location.search,
    }));
    if (r.visibles !== 7 || r.types.join() !== 'surjeteuse') R.echec('filtres', `filtre Surjeteuses : ${r.visibles} cartes (${r.types.join()}) au lieu de 7`, { page: '/machines' });
    if (!r.compte.includes('7')) R.echec('filtres', `compte affiché « ${r.compte} »`, { page: '/machines' });
    if (!r.url.includes('type=surjeteuse')) R.echec('filtres', 'le filtre n’est pas gardé dans l’adresse', { page: '/machines' });
    await page.click('[data-filtre-marque="babylock"]');
    await attendre(500);
    r = await page.evaluate(() => [...document.querySelectorAll('[data-catalogue] > li')].filter((li) => !li.classList.contains('est-cache')).length);
    if (r !== 4) R.echec('filtres', `Surjeteuses Babylock : ${r} cartes au lieu de 4`, { page: '/machines' });

    /* Lien profond : filtre lu depuis l'adresse. */
    await page.goto(BASE + '/machines?type=recouvreuse#catalogue', { waitUntil: 'load' });
    await attendrePret(page);
    r = await page.evaluate(() => [...document.querySelectorAll('[data-catalogue] > li')].filter((li) => !li.classList.contains('est-cache')).length);
    if (r !== 3) R.echec('filtres', `?type=recouvreuse : ${r} cartes au lieu de 3`, { page: '/machines' });

    /* Atelier : choisir la révision met à jour le récapitulatif et le lien. */
    await page.goto(BASE + '/atelier', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-prestation="revision"] .tarif-choisir').scrollIntoViewIfNeeded();
    await page.click('[data-prestation="revision"] .tarif-choisir');
    await attendre(200);
    r = await page.evaluate(() => ({ t: document.querySelector('[data-recap-texte]').textContent, h: document.querySelector('[data-recap-lien]').getAttribute('href') }));
    if (!/119/.test(r.t)) R.echec('tarifs', `récapitulatif « ${r.t} » sans le prix de la révision`, { page: '/atelier' });
    if (!/prestation=revision/.test(r.h)) R.echec('tarifs', `lien de passage sans la prestation (${r.h})`, { page: '/atelier' });

    /* Contact prérempli depuis une fiche machine. */
    await page.goto(BASE + '/contact?sujet=essai&machine=babylock-primo#demande', { waitUntil: 'load' });
    await attendrePret(page);
    r = await page.evaluate(() => ({ s: document.querySelector('#f-sujet').value, m: document.querySelector('#f-machine').value, recap: document.querySelector('[data-recap-demande]').textContent }));
    if (r.s !== 'essai' || r.m !== 'babylock-primo' || !/Primo/.test(r.recap)) R.echec('demande', `préremplissage : ${JSON.stringify(r)}`, { page: '/contact' });
    await page.goto(BASE + '/contact?sujet=atelier&prestation=revision#demande', { waitUntil: 'load' });
    await attendrePret(page);
    r = await page.evaluate(() => ({ visible: !document.querySelector('[data-si-sujet="atelier"]').hidden, p: document.querySelector('#f-prestation').value }));
    if (!r.visible || r.p !== 'revision') R.echec('demande', `atelier prérempli : ${JSON.stringify(r)}`, { page: '/contact' });

    /* Statut d'ouverture : un jour d'ouverture à 10 h, puis un lundi. */
    for (const [quand, attendu] of [['2026-11-25T10:00:00+01:00', /Ouvert/], ['2026-11-23T10:00:00+01:00', /Ouvre mercredi/]]) {
      const p2 = await ctx.newPage();
      await p2.clock.setFixedTime(new Date(quand));
      await p2.goto(BASE + '/contact', { waitUntil: 'load' });
      await attendrePret(p2);
      const t = await p2.evaluate(() => document.querySelector('[data-statut-texte]').textContent);
      if (!attendu.test(t)) R.echec('statut', `${quand} : « ${t} »`, { page: '/contact' });
      await p2.close();
    }
  } finally { await ctx.close(); }
}
