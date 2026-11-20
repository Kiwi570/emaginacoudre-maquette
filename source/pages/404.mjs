/* Page introuvable : « Point sauté », avec son image (couture interrompue). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="ouv-404" id="debut">
  ${c.media({ nom: 'grok/404', alt: c.s('introuvable.alt'), cadrage: '60% 50%', priorite: true, classe: 'ouv-404-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="conteneur ouv-404-texte">
    <h1 data-anime="gsap" data-intro>${c.tb('introuvable.titre')}</h1>
    <p class="masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('introuvable.texte')}</p>
    <p class="ouv-actions" data-anime="gsap" data-intro>
      ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      ${c.lien('machines', { classe: 'bouton bouton--contour' })}
    </p>
    <p class="info-cle" data-info-cle data-anime="gsap" data-intro>${c.t('commun.horairesCourts')}</p>
  </div>
</section>
`;
