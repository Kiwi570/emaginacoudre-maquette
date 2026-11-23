/* Accueil d'E-maginacoudre : la couture comme idée (aiguille qui pique, coutures qui se dessinent),
   des machines avec leurs vrais prix, Michèle et Pascal, l'atelier, la boutique. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carteMachine, statut, horairesSemaine, appelFinal, prixDe } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

const VITRINE = ['brother-cs70s', 'brother-f410', 'brother-4234d', 'babylock-victory', 'babylock-primo', 'babylock-gloria'];
const ORDRE = ['coudre', 'surjeteuse', 'recouvreuse', 'brodeuse'];

export default (c) => {
  const M = c.donnees.machines, T = c.donnees.types;
  const nb = (t) => M.filter((m) => m.type === t).length;
  const des = (t) => {
    const p = M.filter((m) => m.type === t).map(prixDe).filter(Boolean);
    return p.length ? Math.min(...p) : null;
  };
  const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';
  return html`
<section class="ouv-accueil" id="debut">
  <div class="ouv-accueil-texte">
    <p class="surtitre masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('accueil.hero.surtitre')}</p>
    <h1 class="ouv-accueil-titre">
      <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne"><em class="mot-couture" data-effet="couture-titre">${c.t('accueil.hero.titre2')}</em></span></span>
    </h1>
    <p class="ouv-accueil-intro masque-ecran-tres-bas" data-anime="gsap" data-intro>${c.t('accueil.hero.texte')}</p>
    <p class="ouv-actions" data-anime="gsap" data-intro>
      ${c.lien('machines', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('atelier', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.action2') })}
    </p>
    <p class="info-cle" data-info-cle data-anime="gsap" data-intro>${statut(c)}<span class="info-adresse">${c.t('accueil.hero.adresse')}</span></p>
  </div>
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '55% 55%', priorite: true, classe: 'ouv-accueil-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
</section>

<section class="points fond-sable" id="quelle-machine">
  <div class="conteneur">
    <div class="tete-section">
      <h2 data-anime="lignes">${c.tb('accueil.points.titre')}</h2>
      <p data-anime>${c.t('accueil.points.texte')}</p>
    </div>
    <div class="banc" data-banc>
      <svg class="banc-tissu" data-banc-svg role="img" aria-label="${c.s('accueil.points.bancAria')}" data-visuel>
        <defs>
          <pattern id="trame" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#EDE3D3"/><path d="M0 3h6M3 0v6" stroke="#E2D5C1" stroke-width="1"/></pattern>
          <clipPath id="banc-clip"><rect data-banc-revele x="0" y="0" width="0" height="200"/></clipPath>
        </defs>
        <rect data-banc-fond x="0" y="18" width="1200" height="124" rx="14" fill="url(#trame)"/>
        <g clip-path="url(#banc-clip)" data-banc-points></g>
        <g class="banc-aiguille" data-banc-aiguille data-effet="banc-essai"><path d="M0 -60 V 6" class="banc-tige"/><ellipse cx="0" cy="-48" rx="2.2" ry="6" class="banc-chas"/><path d="M-22 10 h44" class="banc-pied"/></g>
      </svg>
      <p class="banc-legende" data-banc-legende aria-live="polite">${c.t('accueil.points.bancDefaut')}</p>
    </div>
    <ul class="points-grille" data-anime="cascade">
      ${ORDRE.map((t) => html`<li class="point-carte" data-point="${t}" data-point-nom="${T[t].point} · ${T[t].court}">
        <p class="point-nom">${T[t].point}</p>
        <h3>${T[t].nom}</h3>
        <p>${T[t].usage}</p>
        <p class="point-prix" data-prix>${des(t) ? html`${c.t('accueil.points.des')} <strong>${euros(des(t))}</strong>` : c.t('commun.prixBoutique')}</p>
        <p class="point-actions">
          <button type="button" class="point-essai" data-point-essai aria-pressed="false">${c.t('accueil.points.essayer')}<span class="visuellement-cache"> : ${T[t].point}</span></button>
          ${c.lien('machines', { ancre: 'catalogue', params: `type=${t}`, classe: 'lien-fleche', texte: c.t('accueil.points.voir', { n: nb(t) }) })}
        </p>
      </li>`)}
    </ul>
    <p class="points-note" data-anime>${c.tb('accueil.points.combinee')}</p>
  </div>
</section>

<section class="vitrine" id="vitrine">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <h2 data-anime="lignes">${c.tb('accueil.vitrine.titre')}</h2>
      <div>
        <p data-anime>${c.t('accueil.vitrine.texte')}</p>
        <p data-anime>${c.lien('machines', { ancre: 'catalogue', classe: 'lien-fleche', texte: c.t('accueil.vitrine.tout') })}</p>
      </div>
    </div>
    <ul class="vitrine-grille" data-anime="cascade">
      ${VITRINE.map((id) => M.find((m) => m.id === id)).map((m) => html`<li data-fx="vitesse" data-fx-force="2">${carteMachine(c, m, { titre: 'h3' })}</li>`)}
    </ul>
  </div>
</section>

<section class="duo" id="michele-et-pascal">
  <h2 class="duo-titre conteneur" data-anime="lignes">${c.tb('accueil.duo.titre')}</h2>
  <div class="duo-volets" data-effet="duo-volets">
    <article class="duo-volet duo-volet--michele">
      ${c.media({ nom: c.donnees.images_choix.michele, alt: c.s('accueil.duo.micheleAlt'), cadrage: '50% 35%', classe: 'duo-media', sizes: '(max-width: 760px) 100vw, 40vw' })}
      <div class="duo-texte">
        <h3>${c.t('accueil.duo.michele')}</h3>
        <p>${c.t('accueil.duo.micheleTexte')}</p>
        ${c.lien('prise-en-main', { classe: 'lien-fleche', texte: c.t('accueil.duo.micheleLien') })}
      </div>
    </article>
    <article class="duo-volet duo-volet--pascal">
      ${c.media({ nom: c.donnees.images_choix.pascal, alt: c.s('accueil.duo.pascalAlt'), cadrage: '50% 40%', classe: 'duo-media', sizes: '(max-width: 760px) 100vw, 40vw' })}
      <div class="duo-texte">
        <h3>${c.t('accueil.duo.pascal')}</h3>
        <p>${c.t('accueil.duo.pascalTexte')}</p>
        ${c.lien('atelier', { classe: 'lien-fleche', texte: c.t('accueil.duo.pascalLien') })}
      </div>
    </article>
  </div>
</section>

<section class="atelier-bande fond-nuit" id="atelier">
  <div class="conteneur atelier-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.atelier.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.atelier.titre')}</h2>
      <p data-anime>${c.t('accueil.atelier.texte')}</p>
      <ul class="tarifs-liste" data-anime="cascade">
        ${['diagnostic', 'devis', 'entretien', 'revision', 'reparation'].map((k) => html`<li><span class="tarif-nom">${c.t('atelier.tarifs.' + k)}</span><span class="tarif-prix" data-prix>${c.t('atelier.tarifs.' + k + 'Prix')}</span><span class="tarif-texte">${c.t('atelier.tarifs.' + k + 'Texte')}</span></li>`)}
      </ul>
      <p class="ouv-actions" data-anime>
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=atelier', classe: 'bouton', texte: c.t('accueil.atelier.passer'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('atelier', { classe: 'bouton bouton--contour', texte: c.t('accueil.atelier.plus') })}
      </p>
    </div>
    ${c.media({ nom: c.donnees.images_choix.atelier, alt: c.s('accueil.atelier.alt'), cadrage: '50% 50%', classe: 'atelier-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="reperes" id="reperes">
  <div class="conteneur reperes-grille">
    <div class="reperes-chiffre">
      <svg class="bobine" viewBox="0 0 200 200" aria-hidden="true" data-visuel><g class="bobine-tour" data-effet="dix-mille"><circle cx="100" cy="100" r="86" class="bobine-joue"/><circle cx="100" cy="100" r="62" class="bobine-fil"/><path class="bobine-spires" d="M38 100a62 62 0 0 1 124 0M44 100a56 56 0 0 1 112 0M50 100a50 50 0 0 1 100 0M44 100a56 56 0 0 0 112 0M38 100a62 62 0 0 0 124 0"/><circle cx="100" cy="100" r="16" class="bobine-axe"/></g><path class="bobine-depart" d="M162 100 C 180 140, 190 170, 200 200"/></svg>
      <p class="grand-nombre" aria-hidden="true"><span data-compteur="10000">10 000</span></p>
      <h2 class="grand-chiffre"><span class="visuellement-cache">${c.t('accueil.reperes.nombre')} </span>${c.tb('accueil.reperes.titreMot')}</h2>
      <p>${c.t('accueil.reperes.label')}</p>
    </div>
    <ul class="reperes-liste" data-anime="cascade">
      <li><strong>1997</strong><span>${c.t('accueil.reperes.r1')}</span></li>
      <li><strong>2012</strong><span>${c.t('accueil.reperes.r2')}</span></li>
      <li><strong>2</strong><span>${c.t('accueil.reperes.r3')}</span></li>
    </ul>
  </div>
</section>

<section class="entrez" id="entrez" data-fx="plein-ecran" data-fx-depart="inset(22% 26% 22% 26% round 28px)">
  <div data-collant>
    ${c.media({ nom: 'boutique-plein', alt: c.s('accueil.entrez.alt'), cadrage: '50% 50%', classe: 'entrez-media', sizes: '100vw' })}
    <div class="entrez-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.entrez.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.entrez.mot2')}</span></div>
    <div class="entrez-legende conteneur" data-fx-apres>
      <h2>${c.tb('accueil.entrez.titre')}</h2>
      <p>${c.t('accueil.entrez.texte')}</p>
    </div>
  </div>
</section>

<section class="boutique fond-sable" id="boutique">
  <div class="conteneur boutique-grille">
    ${c.media({ nom: c.donnees.images_choix.vitrine, alt: c.s('accueil.boutique.legende'), cadrage: '50% 45%', classe: 'boutique-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 data-anime="lignes">${c.tb('accueil.boutique.titre')}</h2>
      <p data-anime>${c.t('accueil.boutique.texte')}</p>
      <h3 class="petit-titre" data-anime>${c.t('accueil.boutique.horaires')}</h3>
      ${horairesSemaine(c)}
      <p class="ouv-actions" data-anime>
        <a class="bouton" href="${c.site.contact.itineraire}" target="_blank" rel="noopener">${c.t('commun.itineraire')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>

${appelFinal(c, { titre: 'accueil.fin.titre', texte: 'accueil.fin.texte', action: 'accueil.fin.action', params: 'sujet=essai' })}
`;
};
