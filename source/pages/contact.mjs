/* Contact : une carte de visite (adresse, téléphone, statut en direct) à côté d'un mur de bobines,
   puis la demande simulée préremplie par l'adresse, et les horaires de la semaine. */
import { html } from '../../outils/gabarit.mjs';
import { statut, horairesSemaine } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

export default (c) => {
  const k = c.site.contact, M = c.donnees.machines;
  return html`
<section class="ouv-contact" id="debut">
  <div class="conteneur ouv-contact-grille">
    <div class="carte-visite" data-anime="gsap" data-intro data-effet="carte-visite">
      <p class="surtitre">${c.t('contact.ouverture.surtitre')}</p>
      <h1>${c.tb('contact.ouverture.titre')}</h1>
      <p class="info-cle" data-info-cle>${statut(c)}</p>
      <p class="carte-visite-action"><a class="bouton" href="#demande" data-sans-transition data-action-principale data-survol="magnetique">${c.t('contact.ouverture.action')}</a></p>
      <dl class="carte-visite-infos">
        <div><dt>${c.t('contact.ouverture.adresseLabel')}</dt><dd>${k.adresse}<br><a href="${k.itineraire}" target="_blank" rel="noopener">${c.t('commun.itineraire')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></dd></div>
        <div><dt>${c.t('contact.ouverture.telLabel')}</dt><dd><a class="carte-visite-tel" href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
        <div><dt>${c.t('contact.ouverture.emailLabel')}</dt><dd><a href="mailto:${k.email}">${k.email}</a></dd></div>
      </dl>
    </div>
    ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.ouverture.alt'), cadrage: '50% 50%', priorite: true, classe: 'ouv-contact-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<section class="demande fond-sable" id="demande">
  <div class="conteneur demande-grille">
    <div class="demande-intro">
      <h2 data-anime="lignes">${c.tb('contact.demande.titre')}</h2>
      <p data-anime>${c.t('contact.demande.texte')}</p>
      <div class="recap recap--contact" data-anime>
        <p class="recap-titre">${c.t('contact.demande.recap')}</p>
        <p class="recap-texte" data-recap-demande aria-live="polite">${c.t('contact.demande.recapEssai')}</p>
      </div>
      <svg class="demande-dessin" viewBox="0 0 320 120" aria-hidden="true" data-visuel data-fx="trace" data-effet="enveloppe-cousue"><rect x="10" y="10" width="300" height="100" rx="8" data-fx-trait/><path d="M12 14 L160 72 L308 14" data-fx-trait/></svg>
    </div>
    <form class="formulaire" data-formulaire action="#" novalidate data-anime>
      <p class="formulaire-simule">${c.t('contact.demande.simule')}</p>
      <div class="champ"><label for="f-sujet">${c.t('contact.demande.sujet')}</label>
        <select id="f-sujet" name="sujet">
          <option value="essai">${c.t('contact.demande.sujetEssai')}</option>
          <option value="atelier">${c.t('contact.demande.sujetAtelier')}</option>
          <option value="prise-en-main">${c.t('contact.demande.sujetPriseEnMain')}</option>
          <option value="autre">${c.t('contact.demande.sujetAutre')}</option>
        </select></div>
      <div class="champ" data-si-sujet="essai"><label for="f-machine">${c.t('contact.demande.machine')}</label>
        <select id="f-machine" name="machine">
          <option value="">${c.t('contact.demande.machineAucune')}</option>
          ${M.map((m) => html`<option value="${m.id}">${m.marque} ${m.nom}</option>`)}
        </select></div>
      <div class="champ" data-si-sujet="atelier" hidden><label for="f-prestation">${c.t('contact.demande.prestation')}</label>
        <select id="f-prestation" name="prestation">
          <option value="diagnostic">${c.t('contact.demande.prestationDiagnostic')}</option>
          <option value="entretien">${c.t('contact.demande.prestationEntretien')}</option>
          <option value="revision">${c.t('contact.demande.prestationRevision')}</option>
          <option value="reparation">${c.t('contact.demande.prestationReparation')}</option>
        </select></div>
      <div class="champ-ligne">
        <div class="champ"><label for="f-nom">${c.t('contact.demande.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="f-tel">${c.t('contact.demande.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" required></div>
      </div>
      <div class="champ"><label for="f-email">${c.t('contact.demande.email')}</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
      <div class="champ"><label for="f-message">${c.t('contact.demande.message')}</label><textarea id="f-message" name="message" rows="4"></textarea></div>
      <p class="mention-donnees">${c.t('contact.demande.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.demande.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

<section class="horaires-section" id="horaires">
  <div class="conteneur horaires-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('contact.horaires.titre')}</h2>
      ${horairesSemaine(c)}
    </div>
    ${c.media({ nom: c.donnees.images_choix.vitrine, alt: c.s('accueil.boutique.legende'), cadrage: '50% 50%', classe: 'horaires-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>
`;
};
