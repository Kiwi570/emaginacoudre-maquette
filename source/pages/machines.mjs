/* Machines : outil d'abord. Grand titre, filtres dès le premier écran, bandeau de machines qui défile,
   puis le catalogue complet avec les vrais prix et un bouton d'essai prérempli. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carteMachine, imageExiste, appelFinal, coutures } from '../gabarits/composants.mjs';

export const page = { cle: 'machines', fichier: 'machines', imagePartage: 'boutique-interieur-960.webp' };

const TYPES = ['coudre', 'brodeuse', 'surjeteuse', 'recouvreuse', 'combinee'];

export default (c) => {
  const M = c.donnees.machines, T = c.donnees.types;
  const nb = (f) => M.filter(f).length;
  const bandeau = M.filter((m) => imageExiste(`machines/${m.id}`)).slice(0, 12);
  return html`
<section class="ouv-machines" id="debut">
  <div class="conteneur">
    <p class="surtitre" data-anime="gsap" data-intro>${c.t('machines.ouverture.surtitre')}</p>
    <h1 class="ouv-machines-titre" data-anime="gsap" data-intro>${c.tb('machines.ouverture.titre', { n: M.length })}</h1>
    <div class="ouv-machines-bas" data-anime="gsap" data-intro>
      <p class="ouv-machines-action">${c.lien('contact', { ancre: 'demande', params: 'sujet=essai', classe: 'bouton', texte: c.t('commun.essayer'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-info-cle><span class="pastille-prix">${c.t('machines.ouverture.info')}</span></p>
      <p class="ouv-machines-texte masque-ecran-tres-bas">${c.t('machines.ouverture.texte')}</p>
    </div>
    <nav class="filtres" aria-label="${c.s('machines.filtres.type')}" data-filtres data-anime="gsap" data-intro>
      <a class="filtre" href="#catalogue" data-filtre-type="" aria-current="true">${c.t('machines.filtres.toutes')} <span>${M.length}</span></a>
      ${TYPES.map((t) => html`<a class="filtre" href="?type=${t}#catalogue" data-filtre-type="${t}">${T[t].nom} <span>${nb((m) => m.type === t)}</span></a>`)}
    </nav>
  </div>
  <div class="ruban-machines" data-iris-centre data-effet="ruban-machines" data-ruban data-visuel aria-hidden="true">
    <div class="ruban-machines-piste" data-intro>
      ${(bandeau.length ? bandeau : M.slice(0, 10)).concat(bandeau.length ? bandeau : M.slice(0, 10)).map((m) => html`<div class="ruban-machine">${imageExiste(`machines/${m.id}`)
        ? brut(`<img src="/assets/images/machines/${m.id}-480.webp" alt="" loading="eager" decoding="async" width="480" height="360">`)
        : html`<span class="ruban-machine-nom">${m.marque} ${m.nom}</span>`}</div>`)}
    </div>
  </div>
</section>

<section class="catalogue" id="catalogue">
  <div class="conteneur">
    <div class="catalogue-tete">
      <h2 data-anime="lignes">${c.t('machines.filtres.titre')}</h2>
      <div class="filtres filtres--marque" role="group" aria-label="${c.s('machines.filtres.marque')}">
        <button type="button" class="filtre" data-filtre-marque="" aria-pressed="true">${c.t('machines.filtres.toutes')}</button>
        <button type="button" class="filtre" data-filtre-marque="brother" aria-pressed="false">Brother <span>${nb((m) => m.marque === 'Brother')}</span></button>
        <button type="button" class="filtre" data-filtre-marque="babylock" aria-pressed="false">Babylock <span>${nb((m) => m.marque === 'Babylock')}</span></button>
      </div>
      <p class="catalogue-compte" role="status" data-compte data-modele="${c.s('machines.filtres.resultat')}" data-modele1="${c.s('machines.filtres.resultat1')}">${c.t('machines.filtres.resultat', { n: M.length })}</p>
    </div>
    <div class="catalogue-groupes" data-catalogue>
      ${TYPES.map((t) => html`<div class="groupe" data-groupe="${t}" id="type-${t}">
        <div class="groupe-tete">
          ${coutures(t, { effet: 'groupe-couture', classe: 'groupe-couture' })}
          <div>
            <h3 class="groupe-nom">${T[t].nom} <span class="groupe-compte" data-groupe-compte>${nb((m) => m.type === t)}</span></h3>
            <p class="groupe-usage"><strong>${T[t].point}.</strong> ${T[t].usage}</p>
          </div>
        </div>
        <ul class="catalogue-grille" data-anime="cascade">
          ${M.filter((m) => m.type === t).map((m) => html`<li data-type="${m.type}" data-marque="${m.marque.toLowerCase()}" data-survol="incline" data-survol-force="5">${carteMachine(c, m, { titre: 'h4' })}</li>`)}
        </ul>
      </div>`)}
    </div>
    <p class="catalogue-vide" data-catalogue-vide hidden>${c.t('machines.filtres.aucune')}</p>
  </div>
</section>

<section class="lire-prix fond-sable" id="prix">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('machines.prix.titre')}</h2>
    <ul class="lire-prix-grille" data-anime="cascade">
      ${['brother', 'babylock', 'boutique'].map((k) => html`<li class="etiquette">
        <svg class="etiquette-dessin" viewBox="0 0 120 60" aria-hidden="true" data-visuel><path d="M6 10 h84 l24 20 l-24 20 h-84 z"/><circle cx="92" cy="30" r="5"/></svg>
        <h3>${c.t('machines.prix.' + k)}</h3>
        <p>${c.t('machines.prix.' + k + 'Texte')}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="conseil" id="conseil">
  <div class="conteneur conseil-grille">
    ${c.media({ nom: c.donnees.images_choix.conseil, alt: c.s('machines.conseil.alt'), cadrage: '50% 55%', classe: 'conseil-media', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 data-anime="lignes">${c.tb('machines.conseil.titre')}</h2>
      <p data-anime>${c.t('machines.conseil.texte')}</p>
      <p class="ouv-actions" data-anime>
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=essai', classe: 'bouton', texte: c.t('machines.conseil.action') })}
        ${c.lien('prise-en-main', { classe: 'lien-fleche', texte: c.t('machines.conseil.lien') })}
      </p>
    </div>
    <div class="industrie-encart" data-anime>
      <h2 class="h3">${c.tb('machines.industrie.titre')}</h2>
      <p>${c.t('machines.industrie.texte')}</p>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=atelier', classe: 'lien-fleche', texte: c.t('machines.industrie.action') })}
    </div>
  </div>
</section>

${appelFinal(c, { titre: 'accueil.fin.titre', texte: 'accueil.fin.texte', action: 'accueil.fin.action', params: 'sujet=essai' })}
`;
};
