/* Composants communs aux pages d'E-maginacoudre : coutures dessinées, carte de machine, statut d'ouverture,
   horaires de la semaine, appel final. Un seul système pour tout le site. */
import { html, brut } from '../../outils/gabarit.mjs';
import { existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '../..');
export const imageExiste = (nom) => {
  const d = join(racine, 'assets/images', dirname(nom));
  if (!existsSync(d)) return false;
  const b = nom.split('/').pop();
  return readdirSync(d).some((f) => f.startsWith(b + '-') && /-\d+\.webp$/.test(f) && !f.startsWith(b + '-mobile'));
};

export const prixDe = (m) => m.vendue || m.catalogue || null;
const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

/* Couture propre à chaque type de machine, tracée au défilement (data-fx="trace"). */
const zig = (x0, x1, y0, y1, pas) => { let d = `M${x0} ${y0}`; let haut = false; for (let x = x0 + pas; x <= x1; x += pas) { d += ` L${x} ${haut ? y0 : y1}`; haut = !haut; } return d; };
export function coutures(type) {
  let traits = '', tissu = '<rect x="0" y="8" width="320" height="74" rx="10" class="tissu"/>';
  if (type === 'coudre') {
    traits = `<path d="M18 32 H302" data-fx-trait class="fil"/><path d="${zig(18, 302, 52, 70, 12)}" data-fx-trait class="fil"/>`;
  } else if (type === 'surjeteuse') {
    tissu = '<rect x="0" y="8" width="320" height="52" rx="10" class="tissu"/>';
    traits = `<path d="M18 34 H302" data-fx-trait class="fil fil--fin"/><path d="${zig(18, 302, 34, 74, 10)}" data-fx-trait class="fil"/><path d="${zig(23, 302, 74, 46, 10)}" data-fx-trait class="fil fil--fin"/>`;
  } else if (type === 'recouvreuse') {
    traits = `<path d="M18 34 H302" data-fx-trait class="fil"/><path d="M18 58 H302" data-fx-trait class="fil"/><path d="${zig(18, 302, 38, 54, 9)}" data-fx-trait class="fil fil--fin fil--dessous"/>`;
  } else if (type === 'brodeuse') {
    traits = `<path d="M20 62 C 60 18, 104 22, 128 46 C 150 68, 186 70, 208 46 C 228 24, 262 22, 300 40" data-fx-trait class="fil"/>`
      + `<path d="M84 34 c -10 -18 6 -26 14 -12 c 8 -14 24 -6 14 12 c 16 2 14 20 -2 18 c 2 16 -16 18 -16 2 c -14 8 -24 -8 -10 -20 z" data-fx-trait class="fil fil--fin"/>`
      + `<path d="M232 56 c 12 -4 22 4 20 16 c -12 2 -20 -6 -20 -16 z M176 30 c -2 -12 10 -18 18 -10 c -6 10 -14 12 -18 10 z" data-fx-trait class="fil fil--fin"/>`;
  }
  return brut(`<svg class="couture couture--${type}" viewBox="0 0 320 90" aria-hidden="true" data-visuel data-fx="trace" data-effet="quatre-coutures">${tissu}${traits}</svg>`);
}

/* Silhouette dessinée d'une machine, si sa photo n'est pas (encore) disponible. */
function silhouette(type) {
  const corps = type === 'surjeteuse' || type === 'recouvreuse' || type === 'combinee'
    ? '<path d="M70 150 h180 v-18 h-30 v-62 c0 -14 -10 -24 -24 -24 h-70 c-14 0 -24 10 -24 24 v62 h-32z" class="sil-corps"/><path d="M110 70 h60 M110 86 h60" class="sil-trait"/><circle cx="214" cy="82" r="14" class="sil-trait"/>'
    : '<path d="M46 150 h228 v-16 h-38 v-70 c0 -12 -9 -22 -22 -22 h-120 c-14 0 -24 10 -24 24 v14 h104 v36 h-14 v18 h-114z" class="sil-corps"/><path d="M124 120 v20" class="sil-trait"/><circle cx="214" cy="74" r="12" class="sil-trait"/><path d="M90 60 h70" class="sil-trait"/>';
  return brut(`<svg class="machine-silhouette" viewBox="0 0 320 180" aria-hidden="true" data-visuel>${corps}</svg>`);
}

export function prix(c, m) {
  if (m.vendue) return html`<p class="prix" data-prix><strong>${euros(m.vendue)}</strong> <span>${c.t('commun.prixVendue')}, ${c.t('commun.prixComprise')}</span><span class="prix-avant">${c.t('commun.prixCatalogue')} ${euros(m.catalogue)}</span></p>`;
  if (m.catalogue) return html`<p class="prix" data-prix><strong>${euros(m.catalogue)}</strong> <span>${c.t('commun.prixCatalogue')}, ${c.t('commun.prixComprise')}</span></p>`;
  return html`<p class="prix prix--boutique" data-prix><span>${c.t('commun.prixBoutique')}</span></p>`;
}

export function carteMachine(c, m, { titre = 'h3' } = {}) {
  const T = c.donnees.types[m.type];
  const nomImg = `machines/${m.id}`;
  const visuel = imageExiste(nomImg)
    ? c.media({ nom: nomImg, alt: `${m.marque} ${m.nom}, ${T.court.toLowerCase()}`, classe: 'machine-media', sizes: '(max-width: 760px) 50vw, 25vw', attrs: 'data-contain' })
    : html`<div class="machine-media machine-media--dessin">${silhouette(m.type)}</div>`;
  const h = titre === 'h2' ? html`<h2 class="machine-nom">${m.nom}</h2>` : html`<h3 class="machine-nom">${m.nom}</h3>`;
  return html`<article class="machine" data-type="${m.type}" data-marque="${m.marque.toLowerCase()}" id="m-${m.id}">
    ${visuel}
    <div class="machine-corps">
      <p class="machine-marque">${m.marque} · ${T.court}</p>
      ${h}
      ${prix(c, m)}
      ${c.lien('contact', { ancre: 'demande', params: `sujet=essai&machine=${m.id}`, classe: 'machine-essai', texte: html`${c.t('commun.essayer')}<span class="visuellement-cache"> : ${m.marque} ${m.nom}</span>` })}
    </div>
  </article>`;
}

/* Statut d'ouverture : horaires écrits en dur (sans JavaScript), remplacés par l'état en direct (heure de Paris). */
export const statut = (c) => html`<span class="statut" data-statut><span class="statut-point" aria-hidden="true"></span><span data-statut-texte>${c.t('commun.horairesCourts')}</span></span>`;

export function horairesSemaine(c) {
  return html`<ul class="horaires" data-horaires-semaine data-anime="cascade">${c.donnees.horaires.semaine.map((j) => html`<li data-jour="${j.jour}"${j.texte === 'Fermé' || j.jour < 3 ? brut(' class="horaires-ferme"') : ''}><span class="horaires-jour">${j.nom}</span><span class="horaires-heures">${j.texte}</span></li>`)}</ul>
  <p class="horaires-note">${c.t('commun.horairesNote')}</p>`;
}

/* Appel final, bande bleu nuit avec un cadre cousu qui se trace. */
export function appelFinal(c, { titre, texte, action, params = 'sujet=essai' }) {
  return html`<section class="fin fond-nuit" id="fin">
  <div class="conteneur fin-cadre">
    <svg class="fin-couture" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true" data-superpose data-visuel data-fx="trace" data-effet="couture-appel"><rect x="8" y="8" width="984" height="384" rx="28" data-fx-trait/></svg>
    <h2 data-anime="lignes">${c.tb(titre)}</h2>
    <p data-anime>${c.t(texte)}</p>
    <p class="ouv-actions fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params, classe: 'bouton', texte: c.t(action), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div>
</section>`;
}
