/* La maison : plein cadre avec « 29 » géant qui compte, frise cousue de 1997 à 2025, Michèle et Pascal,
   les marques (mots géants), les actualités et l'histoire de Babylock, la vitrine. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/composants.mjs';

export const page = { cle: 'la-maison', fichier: 'la-maison', imagePartage: 'grok/la-maison-ouverture-1280.webp' };

const BABYLOCK = ['1950', '1963', '1968', '1993', '2001', '2004', '2024'];
const MOSAIQUE = [
  { nom: 'boutique-interieur', alt: "L'intérieur de la boutique : étagères de tissus, de créations et de mercerie" },
  { nom: 'creation-theiere', alt: 'Théière en tissu à pois rouges, cousue main' },
  { nom: 'creation-poupee', alt: 'Poupée en tissu posée sur les étagères de la boutique', cadrage: '50% 30%' },
  { nom: 'boutique-tissus', alt: 'Tissus fleuris en rouleaux, rouges, bleus et blancs' },
  { nom: 'creation-sacs', alt: 'Sac cousu dans un tissu à fleurs, devant des coupons colorés' },
  { nom: 'creation-poupee-pois', alt: 'Poupée à pois sur un fauteuil en osier, avec des coupons de tissu', cadrage: '50% 35%' },
];

export default (c) => html`
<section class="ouv-maison" id="debut">
  ${c.media({ nom: 'grok/la-maison-ouverture', alt: c.s('maison.ouverture.alt'), cadrage: '70% 50%', cadrageMobile: '50% 80%', priorite: true, classe: 'ouv-maison-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="5"' })}
  <div class="conteneur ouv-maison-texte">
    <p class="surtitre masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('maison.ouverture.surtitre')}</p>
    <h1 data-anime="gsap" data-intro><span class="nombre-geant" data-iris-centre data-effet="vingt-neuf"><span data-vingt-neuf>${c.t('maison.ouverture.nombre')}</span></span> <span class="ouv-maison-mots">${c.tb('maison.ouverture.titre')}</span></h1>
    <p class="ouv-actions" data-anime="gsap" data-intro>
      ${c.lien('contact', { classe: 'bouton', texte: c.t('maison.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="info-cle" data-info-cle>${c.t('maison.ouverture.info')}</span>
    </p>
    <p class="ouv-maison-intro masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('maison.ouverture.texte')}</p>
  </div>
</section>

<section class="histoire" id="histoire">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('maison.histoire.titre')}</h2>
    <div class="frise">
      <svg class="frise-fil" viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true" data-visuel data-fx="trace" data-effet="frise-cousue"><path d="M20 0 C 4 200, 36 300, 20 500 S 4 800, 20 1000" data-fx-trait/></svg>
      <ol class="frise-liste" data-anime="cascade">
        <li><strong>${c.t('maison.histoire.avant')}</strong><p>${c.t('maison.histoire.avantT')}</p></li>
        <li><strong>1997</strong><p>${c.t('maison.histoire.a1997')}</p></li>
        <li><strong>2012</strong><p>${c.t('maison.histoire.a2012')}</p></li>
        <li><strong>2025</strong><p>${c.t('maison.histoire.a2025')}</p></li>
      </ol>
    </div>
  </div>
</section>

<section class="equipe fond-sable" id="equipe">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('maison.equipe.titre')}</h2>
    <div class="equipe-grille" data-anime="cascade">
      ${['michele', 'pascal'].map((k) => html`<article class="personne">
        ${c.media({ nom: c.donnees.images_choix[k], alt: c.s(`accueil.duo.${k}Alt`), cadrage: '50% 35%', classe: 'personne-media', sizes: '(max-width: 760px) 100vw, 40vw' })}
        <p class="surtitre">${c.t(`maison.equipe.${k}Role`)}</p>
        <h3>${c.t(`maison.equipe.${k}`)}</h3>
        <p>${c.t(`maison.equipe.${k}Texte`)}</p>
      </article>`)}
    </div>
  </div>
</section>

<section class="marques" id="marques">
  <div class="marques-ruban" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${c.t('maison.marques.ruban')} ${c.t('maison.marques.ruban')}</p>
    <p data-fx-rangee data-sens="-1">${c.t('maison.marques.ruban')} ${c.t('maison.marques.ruban')}</p>
  </div>
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('maison.marques.titre')}</h2>
    <dl class="marques-grille" data-anime="cascade">
      ${['agree', 'forme', 'industrie'].map((k) => html`<div><dt>${c.t('maison.marques.' + k)}</dt><dd>${c.t('maison.marques.' + k + 'T')}</dd></div>`)}
    </dl>
  </div>
</section>

<section class="actus fond-sable" id="actualites">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.tb('maison.actus.titre')}</h2>
    <div class="actus-grille">
      <ul class="actus-liste" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li class="actu"><h3>${c.t(`maison.actus.n${i}`)}</h3><p>${c.t(`maison.actus.n${i}t`)}</p></li>`)}
      </ul>
      <article class="actu actu--babylock" data-anime>
        <h3>${c.t('maison.actus.n4')}</h3>
        <p>${c.t('maison.actus.n4t')}</p>
        <ol class="babylock-dates">${BABYLOCK.map((a) => html`<li><strong>${a}</strong><span>${c.t('maison.babylock.d' + a)}</span></li>`)}</ol>
      </article>
    </div>
  </div>
</section>

<section class="mosaique" id="dans-la-boutique">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <h2 data-anime="lignes">${c.tb('maison.mosaique.titre')}</h2>
      <p data-anime>${c.t('maison.mosaique.texte')}</p>
    </div>
    <div class="mosaique-grille">
      ${MOSAIQUE.map((m, i) => c.media({ nom: m.nom, alt: m.alt, cadrage: m.cadrage || '50% 50%', classe: `mosaique-media mosaique-media--${i + 1}`, sizes: '(max-width: 760px) 50vw, 30vw', attrs: i % 2 ? 'data-fx="parallaxe" data-fx-force="8"' : 'data-anime="rideau"' }))}
    </div>
  </div>
</section>

<section class="vitrine-maison fond-sable" id="boutique">
  <div class="conteneur vitrine-maison-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('accueil.boutique.titre')}</h2>
      <p data-anime>${c.t('accueil.boutique.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'horaires', classe: 'lien-fleche', texte: c.t('maison.vitrine.lien') })}</p>
    </div>
    ${c.media({ nom: c.donnees.images_choix.vitrine, alt: c.s('accueil.boutique.legende'), cadrage: '50% 50%', classe: 'vitrine-maison-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appelFinal(c, { titre: 'maison.fin.titre', texte: 'maison.fin.texte', action: 'maison.fin.action', params: 'sujet=essai' })}
`;
