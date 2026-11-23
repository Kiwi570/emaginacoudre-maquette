/* Atelier : ouverture scindée, photo pleine hauteur à gauche qui s'ouvre comme un capot, prix en très grand sur bleu nuit.
   Puis le déroulé, les tarifs à choisir (récapitulatif prérempli vers le contact), la révision, l'industriel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/composants.mjs';

export const page = { cle: 'atelier', fichier: 'atelier', imagePartage: 'grok/atelier-ouverture-1280.webp' };

const TARIFS = [
  { k: 'entretien', id: 'entretien', picto: '<path d="M14 40 h22 l6 -14 h-34 z"/><path d="M20 26 v-8 h10 v8"/><path d="M42 26 c6 -2 10 -6 12 -12"/><path d="M54 30 c0 4 -3 6 -3 9 a3 3 0 0 0 6 0 c0 -3 -3 -5 -3 -9"/>' },
  { k: 'revision', id: 'revision', picto: '<circle cx="24" cy="28" r="12"/><circle cx="24" cy="28" r="4"/><path d="M24 12 v-4 M24 48 v-4 M8 28 h4 M36 28 h4 M13 17 l3 3 M32 36 l3 3 M13 39 l3 -3 M32 20 l3 -3"/><path d="M40 44 l14 14"/><circle cx="46" cy="24" r="0.1"/>' },
  { k: 'reparation', id: 'reparation', picto: '<path d="M12 50 l22 -22"/><path d="M34 28 a10 10 0 1 0 8 -16 l-6 6 -6 -2 -2 -6 6 -6 a10 10 0 0 0 -16 8"/><path d="M10 48 l4 4"/>' },
];

export default (c) => html`
<section class="ouv-atelier fond-nuit" id="debut">
  ${c.media({ nom: 'grok/atelier-ouverture', alt: c.s('accueil.atelier.altEtabli'), cadrage: '50% 50%', priorite: true, classe: 'ouv-atelier-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-iris-centre data-effet="capot"' })}
  <div class="ouv-atelier-texte">
    <p class="surtitre masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('atelier.ouverture.surtitre')}</p>
    <h1 data-anime="gsap" data-intro>${c.tb('atelier.ouverture.titre')}</h1>
    <p class="prix-geant" data-info-cle data-anime="gsap" data-intro><strong data-prix>${c.t('atelier.ouverture.prix')}</strong><span>${c.t('atelier.ouverture.prixLabel')}</span></p>
    <p class="ouv-actions" data-anime="gsap" data-intro>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=atelier', classe: 'bouton', texte: c.t('atelier.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="#tarifs" data-sans-transition>${c.t('atelier.ouverture.action2')}</a>
    </p>
    <p class="ouv-atelier-intro masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('atelier.ouverture.texte')}</p>
  </div>
</section>

<section class="deroule" id="deroule">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('atelier.deroule.titre')}</h2>
    <div class="deroule-piste">
      <svg class="deroule-fil" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-visuel data-fx="trace" data-effet="deroule-fil"><path d="M10 20 C 200 4, 300 36, 500 20 S 800 4, 990 20" data-fx-trait/></svg>
      <ol class="deroule-etapes" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li><span class="deroule-num">${i}</span><h3>${c.t(`atelier.deroule.e${i}`)}</h3><p>${c.t(`atelier.deroule.e${i}t`)}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="tarifs fond-sable" id="tarifs">
  <div class="conteneur tarifs-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('atelier.tarifs.titre')}</h2>
      <p data-anime>${c.t('atelier.tarifs.texte')}</p>
      <ul class="tarifs-petits" data-anime="cascade">
        ${['diagnostic', 'devis'].map((k) => html`<li><span class="tarif-nom">${c.t('atelier.tarifs.' + k)}</span><span class="tarif-prix" data-prix>${c.t('atelier.tarifs.' + k + 'Prix')}</span><span class="tarif-texte">${c.t('atelier.tarifs.' + k + 'Texte')}</span></li>`)}
      </ul>
    </div>
    <div class="tarifs-cartes" data-choix-prestation>
      ${TARIFS.map((t) => html`<article class="tarif-carte" data-prestation="${t.id}">
        ${brut(`<svg class="tarif-picto" viewBox="0 0 64 64" aria-hidden="true" data-visuel data-fx="trace" data-effet="pictos-atelier">${t.picto.replace(/<(path|circle)/g, '<$1 data-fx-trait')}</svg>`)}
        <h3>${c.t('atelier.tarifs.' + t.k)}</h3>
        <p class="tarif-carte-prix" data-prix>${c.t('atelier.tarifs.' + t.k + 'Prix')}</p>
        <p>${c.t('atelier.tarifs.' + t.k + 'Texte')}</p>
        <button type="button" class="bouton bouton--contour tarif-choisir" aria-pressed="false" data-libelle-choisi="${c.s('atelier.tarifs.choisi')}" data-libelle-choisir="${c.s('atelier.tarifs.choisir')}"><span data-libelle-bouton>${c.t('atelier.tarifs.choisir')}</span><span class="visuellement-cache"> : ${c.t('atelier.tarifs.' + t.k)}</span></button>
      </article>`)}
    </div>
    <div class="recap" data-recap>
      <p class="recap-titre">${c.t('atelier.tarifs.recap')}</p>
      <p class="recap-texte" data-recap-texte aria-live="polite">${c.t('atelier.tarifs.recapVide')}</p>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=atelier', classe: 'bouton', texte: c.t('atelier.tarifs.action'), attrs: 'data-recap-lien' })}
    </div>
  </div>
</section>

<section class="revision" id="revision">
  <div class="conteneur revision-grille">
    <div class="revision-photos">
      ${c.media({ nom: 'atelier-coeur', alt: c.s('atelier.revision.alt1'), cadrage: '50% 50%', classe: 'revision-media', sizes: '(max-width: 760px) 50vw, 22vw', legende: c.t('atelier.revision.legende1'), attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'atelier-ouverte', alt: c.s('atelier.revision.alt2'), cadrage: '50% 50%', classe: 'revision-media revision-media--decale', sizes: '(max-width: 760px) 50vw, 22vw', legende: c.t('atelier.revision.legende2'), attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>
    <div>
      <h2 data-anime="lignes">${c.tb('atelier.revision.titre')}</h2>
      <p data-anime>${c.t('atelier.revision.texte')}</p>
      <ol class="revision-liste" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li>${c.t(`atelier.revision.l${i}`)}</li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="industrie fond-nuit" id="industrie">
  <div class="conteneur industrie-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('atelier.industrie.titre')}</h2>
      <p data-anime>${c.t('atelier.industrie.texte')}</p>
      <p class="compteur-atelier" data-anime><strong data-compteur="10000">10 000</strong> <span>${c.t('atelier.industrie.compteur')}</span></p>
    </div>
    ${c.media({ nom: c.donnees.images_choix.industrie, alt: c.s('atelier.industrie.alt'), cadrage: '50% 50%', classe: 'industrie-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appelFinal(c, { titre: 'atelier.fin.titre', texte: 'atelier.fin.texte', action: 'atelier.fin.action', params: 'sujet=atelier' })}
`;
