/* Prise en main : grand titre puis grand bandeau photo qui se dévoile depuis le centre.
   Avant, pendant, après ; citation de Michèle ; cours de couture ; questions. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/composants.mjs';

export const page = { cle: 'prise-en-main', fichier: 'prise-en-main', imagePartage: 'grok/prise-en-main-ouverture-1280.webp' };

export default (c) => html`
<section class="ouv-pem" id="debut">
  <div class="conteneur ouv-pem-tete">
    <p class="surtitre" data-anime="gsap" data-intro>${c.t('priseEnMain.ouverture.surtitre')}</p>
    <h1 data-anime="gsap" data-intro>${c.tb('priseEnMain.ouverture.titre')}</h1>
    <div class="ouv-pem-bas" data-anime="gsap" data-intro>
      <div class="ouv-pem-actions">
        <p class="info-cle" data-info-cle><span class="pastille-prix">${c.t('priseEnMain.ouverture.info')}</span></p>
        <p class="ouv-actions">
          ${c.lien('contact', { ancre: 'demande', params: 'sujet=prise-en-main', classe: 'bouton', texte: c.t('priseEnMain.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
          ${c.lien('machines', { classe: 'lien-fleche', texte: c.t('priseEnMain.ouverture.action2') })}
        </p>
      </div>
      <p class="ouv-pem-texte">${c.t('priseEnMain.ouverture.texte')}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/prise-en-main-ouverture', alt: c.s('priseEnMain.ouverture.alt'), cadrage: '50% 78%', priorite: true, classe: 'ouv-pem-media', sizes: '100vw', attrs: 'data-iris-centre data-effet="bandeau-devoile"' })}
</section>

<section class="temps" id="avant-pendant-apres">
  <div class="conteneur temps-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('priseEnMain.temps.titre')}</h2>
      <ol class="temps-liste" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li><h3>${c.t(`priseEnMain.temps.t${i}`)}</h3><p>${c.t(`priseEnMain.temps.t${i}t`)}</p></li>`)}
      </ol>
    </div>
    <figure class="citation" data-anime>
      ${c.media({ nom: c.donnees.images_choix.michele, alt: c.s('accueil.duo.micheleAlt'), cadrage: '50% 35%', classe: 'citation-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
      <blockquote><p>« ${c.t('priseEnMain.temps.citation')} »</p></blockquote>
      <figcaption>${c.t('priseEnMain.temps.auteur')}</figcaption>
    </figure>
  </div>
</section>

<section class="cours fond-sable" id="cours">
  <div class="conteneur cours-grille">
    ${c.media({ nom: 'grok/cours-couture', alt: c.s('priseEnMain.cours.alt'), cadrage: '50% 50%', classe: 'cours-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 data-anime="lignes">${c.tb('priseEnMain.cours.titre')}</h2>
      <p data-anime>${c.t('priseEnMain.cours.texte')}</p>
      <p data-anime><a class="lien-fleche" href="https://camcoutureclub.com" target="_blank" rel="noopener">${c.t('priseEnMain.cours.lien')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></p>
    </div>
  </div>
</section>

<section class="questions" id="questions">
  <div class="conteneur questions-grille">
    <h2 data-anime="lignes">${c.tb('priseEnMain.questions.titre')}</h2>
    <div class="questions-liste" data-anime="cascade">
      ${[1, 2, 3, 4].map((i) => html`<details class="question"><summary>${c.t(`priseEnMain.questions.q${i}`)}<span class="question-plus" aria-hidden="true"></span></summary><p>${c.t(`priseEnMain.questions.r${i}`)}</p></details>`)}
    </div>
    <svg class="questions-dessin" viewBox="0 0 200 260" aria-hidden="true" data-visuel data-fx="trace" data-effet="aiguille-fil"><path d="M100 20 v170" data-fx-trait class="aiguille"/><ellipse cx="100" cy="40" rx="5" ry="12" data-fx-trait class="aiguille"/><path d="M100 40 C 160 60, 40 120, 120 160 S 60 230, 150 250" data-fx-trait class="fil"/></svg>
  </div>
</section>

${appelFinal(c, { titre: 'priseEnMain.fin.titre', texte: 'priseEnMain.fin.texte', action: 'priseEnMain.fin.action', params: 'sujet=prise-en-main' })}
`;
