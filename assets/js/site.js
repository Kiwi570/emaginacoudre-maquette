/* Effets propres à E-maginacoudre. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les mesures
   et la bibliothèque d'effets (coutures tracées : data-fx="trace", parallaxe, zoom, cascade, mots géants…).
   Effets du plan : couture de l'intro, duo-volets, dix-mille (bobine), ruban-machines, capot, bandeau-devoile,
   vingt-neuf, carte-visite ; plus le statut d'ouverture en direct, les filtres du catalogue, le choix des tarifs
   et la demande préremplie. */
import { demarrer, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Statut d'ouverture (heure de Paris, jours fériés exclus) ---------- */
const HORAIRES = { 3: [[570, 750], [840, 1110]], 4: [[570, 750], [840, 1110]], 5: [[570, 750], [840, 1110]], 6: [[570, 750], [840, 1110]] };
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const hm = (m) => { const h = Math.floor(m / 60), mm = m % 60; return `${h} h${mm ? ' ' + String(mm).padStart(2, '0') : ''}`; };
function paris(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short' })
    .formatToParts(d).map((x) => [x.type, x.value]));
  const jours = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { a: +p.year, m: +p.month, j: +p.day, jour: jours[p.weekday], min: (+p.hour) * 60 + (+p.minute) };
}
function paques(a) {
  const f = Math.floor, G = a % 19, C = f(a / 100), H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)), J = (a + f(a / 4) + I + 2 - C + f(C / 4)) % 7, L = I - J;
  const m = 3 + f((L + 40) / 44), j = L + 28 - 31 * f(m / 4);
  return new Date(Date.UTC(a, m - 1, j));
}
function ferie(a, m, j) {
  const fixes = ['1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25'];
  if (fixes.includes(`${m}-${j}`)) return true;
  const p = paques(a), jourDe = (n) => { const d = new Date(p); d.setUTCDate(d.getUTCDate() + n); return `${d.getUTCMonth() + 1}-${d.getUTCDate()}`; };
  return [1, 39, 50].map(jourDe).includes(`${m}-${j}`);
}
function calculerStatut() {
  const t = paris();
  if (ferie(t.a, t.m, t.j)) return null; /* jour férié : horaires non confirmés, aucun statut */
  const plages = HORAIRES[t.jour] || [];
  for (const [o, f] of plages) if (t.min >= o && t.min < f) return { etat: 'ouvert', texte: `Ouvert, jusqu'à ${hm(f)}` };
  const suivante = plages.find(([o]) => o > t.min);
  if (suivante) return { etat: 'bientot', texte: plages[0][0] < t.min ? `Pause déjeuner, réouverture à ${hm(suivante[0])}` : `Ouvre aujourd'hui à ${hm(suivante[0])}` };
  for (let k = 1; k <= 7; k++) {
    const jour = (t.jour + k) % 7, p = HORAIRES[jour];
    if (p) return { etat: 'ferme', texte: k === 1 ? `Ouvre demain à ${hm(p[0][0])}` : `Ouvre ${JOURS[jour]} à ${hm(p[0][0])}` };
  }
  return null;
}
function statuts() {
  const s = calculerStatut();
  $$('[data-statut]').forEach((el) => {
    if (!s) return;
    el.dataset.etat = s.etat;
    const t = $('[data-statut-texte]', el);
    if (t) t.textContent = s.texte;
  });
  const jour = paris().jour;
  $$('[data-horaires-semaine] li').forEach((li) => {
    const oui = +li.dataset.jour === jour;
    li.classList.toggle('aujourdhui', oui);
    if (oui) li.setAttribute('aria-current', 'date'); else li.removeAttribute('aria-current');
  });
}

/* ---------- Catalogue : filtres par type et par marque, gardés dans l'adresse ---------- */
function catalogue() {
  const grille = $('[data-catalogue]');
  if (!grille) return;
  const items = $$(':scope > li', grille), compte = $('[data-compte]'), vide = $('[data-catalogue-vide]');
  const params = new URLSearchParams(location.search);
  let type = params.get('type') || '', marque = params.get('marque') || '';
  const appliquer = (anime) => {
    const faire = () => {
      let n = 0;
      items.forEach((li) => {
        const ok = (!type || li.dataset.type === type) && (!marque || li.dataset.marque === marque);
        li.classList.toggle('est-cache', !ok);
        if (ok) n++;
      });
      if (compte) compte.textContent = n === 1 ? compte.dataset.modele1 : compte.dataset.modele.replace('{n}', n);
      if (vide) vide.hidden = n > 0;
      $$('[data-filtre-type]').forEach((b) => { if (b.dataset.filtreType === type) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
      $$('[data-filtre-marque]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtreMarque === marque)));
      /* Rubrique vide pour la marque choisie : grisée. */
      $$('[data-filtre-type]').forEach((b) => {
        const t = b.dataset.filtreType;
        const existe = !t || items.some((li) => li.dataset.type === t && (!marque || li.dataset.marque === marque));
        b.classList.toggle('filtre--vide', !existe);
        if (!existe) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
      });
      const u = new URL(location.href);
      type ? u.searchParams.set('type', type) : u.searchParams.delete('type');
      marque ? u.searchParams.set('marque', marque) : u.searchParams.delete('marque');
      if (anime) u.hash = '#catalogue';
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
      grille.classList.remove('filtrage');
    };
    if (!anime) return faire();
    grille.classList.add('filtrage');
    setTimeout(faire, 220);
  };
  $$('[data-filtre-type]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    if (b.getAttribute('aria-disabled') === 'true') return;
    type = b.dataset.filtreType;
    appliquer(true);
    const cible = $('#catalogue');
    if (cible && cible.getBoundingClientRect().top > window.innerHeight * 0.6) cible.scrollIntoView({ block: 'start' });
  }));
  $$('[data-filtre-marque]').forEach((b) => b.addEventListener('click', () => { marque = b.dataset.filtreMarque; appliquer(true); }));
  appliquer(false);
}

/* ---------- Atelier : choix d'une prestation, récapitulatif et lien prérempli ---------- */
function tarifs() {
  const zone = $('[data-choix-prestation]');
  if (!zone) return;
  const texte = $('[data-recap-texte]'), lien = $('[data-recap-lien]'), vide = texte ? texte.textContent : '';
  $$('.tarif-carte', zone).forEach((carte) => {
    const b = $('.tarif-choisir', carte);
    b.addEventListener('click', () => {
      const deja = carte.classList.contains('est-choisie');
      $$('.tarif-carte', zone).forEach((c2) => {
        c2.classList.remove('est-choisie');
        const b2 = $('.tarif-choisir', c2); b2.setAttribute('aria-pressed', 'false'); $('[data-libelle-bouton]', b2).textContent = b2.dataset.libelleChoisir;
      });
      const base = new URL(lien.href, location.href);
      if (!deja) {
        carte.classList.add('est-choisie');
        b.setAttribute('aria-pressed', 'true'); $('[data-libelle-bouton]', b).textContent = b.dataset.libelleChoisi;
        texte.textContent = `${$('h3', carte).textContent} · ${$('.tarif-carte-prix', carte).textContent}`;
        base.searchParams.set('prestation', carte.dataset.prestation);
      } else {
        texte.textContent = vide;
        base.searchParams.delete('prestation');
      }
      lien.href = base.pathname + base.search + base.hash;
    });
  });
}

/* ---------- Contact : champs selon le sujet, récapitulatif en direct ---------- */
function demande() {
  const f = $('[data-formulaire]');
  if (!f) return;
  const sujet = $('#f-sujet', f), machine = $('#f-machine', f), prestation = $('#f-prestation', f), recap = $('[data-recap-demande]');
  const NOMS = { essai: 'Essai en boutique', atelier: "Passage à l'atelier", 'prise-en-main': 'Question à Michèle', autre: 'Autre demande' };
  if (sujet && !sujet.value) sujet.value = 'essai';
  if (prestation && !prestation.value) prestation.value = 'diagnostic';
  if (machine && machine.selectedIndex < 0) machine.value = '';
  const maj = () => {
    const s = sujet.value;
    $$('[data-si-sujet]', f).forEach((el) => { el.hidden = el.dataset.siSujet !== s; });
    let t = NOMS[s] || NOMS.autre;
    if (s === 'essai' && machine.value) t += ` · ${machine.options[machine.selectedIndex].text}`;
    if (s === 'atelier' && prestation.value) t += ` · ${prestation.options[prestation.selectedIndex].text}`;
    if (recap) recap.textContent = t;
  };
  [sujet, machine, prestation].forEach((el) => el && el.addEventListener('change', maj));
  maj();
}

/* ---------- Effets liés au défilement ---------- */
function effets() {
  const ST = window.ScrollTrigger;
  if (!gsap || !ST) return;
  /* Michèle et Pascal : deux volets qui s'écartent du centre en entrant. */
  const volets = $('[data-effet="duo-volets"]');
  if (volets && window.matchMedia('(min-width: 761px)').matches) {
    const [g, d] = $$('.duo-volet', volets);
    gsap.fromTo(g, { xPercent: -6 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: volets, start: 'top bottom', end: 'top 35%', scrub: 0.6 } });
    gsap.fromTo(d, { xPercent: 6 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: volets, start: 'top bottom', end: 'top 35%', scrub: 0.6 } });
  } else if (volets) {
    $$('.duo-volet', volets).forEach((v, i) => gsap.fromTo(v, { y: 40 }, { y: 0, ease: 'none', scrollTrigger: { trigger: v, start: 'top bottom', end: 'top 50%', scrub: 0.6 } }));
  }
  /* Bobine qui tourne pendant que le fil se déroule. */
  const tour = $('.bobine-tour[data-effet="dix-mille"]');
  if (tour) gsap.fromTo(tour, { rotation: 0 }, { rotation: -540, ease: 'none', svgOrigin: '100 100', scrollTrigger: { trigger: '.reperes', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  /* Machines : le bandeau glisse au défilement. */
  const piste = $('.ruban-machines-piste');
  if (piste) gsap.fromTo(piste, { x: 0 }, { x: () => -Math.min(piste.scrollWidth / 2, window.innerWidth * 0.8), ease: 'none', scrollTrigger: { trigger: '.ruban-machines', start: 'top bottom', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } });
  /* Atelier : la photo se referme en carte quand on descend (capot). */
  const capot = $('[data-effet="capot"]');
  if (capot) gsap.fromTo(capot, { clipPath: 'inset(0% 0% 0% 0% round 0px)' }, { clipPath: 'inset(5% 5% 5% 5% round 28px)', ease: 'none', scrollTrigger: { trigger: capot, start: 'top top', end: 'bottom top', scrub: 0.6 } });
  /* Prise en main : le bandeau s'élargit jusqu'aux bords. */
  const bandeau = $('[data-effet="bandeau-devoile"]');
  if (bandeau) gsap.fromTo(bandeau, { clipPath: 'inset(0% 7% 0% 7% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: bandeau, start: 'top 85%', end: 'top 25%', scrub: 0.6 } });
  /* La maison : le 29 remonte plus lentement que la page. */
  const vn = $('[data-effet="vingt-neuf"]');
  if (vn) gsap.fromTo(vn, { y: 0 }, { y: -60, ease: 'none', scrollTrigger: { trigger: '.ouv-maison', start: 'top top', end: 'bottom top', scrub: 0.6 } });
  /* Contact : la carte de visite se soulève un peu au défilement. */
  const cv = $('[data-effet="carte-visite"]');
  if (cv) gsap.fromTo(cv, { y: 0, rotation: 0 }, { y: -24, rotation: -1, ease: 'none', scrollTrigger: { trigger: '.ouv-contact', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}

/* ---------- Ouverture ---------- */
const PREMIER = '[data-intro], .hero-ligne';
function arriveePremierEcran(tl, t0) {
  const lignes = $$('.hero-ligne');
  if (lignes.length) tl.fromTo(lignes, { yPercent: 125, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, t0);
  const autres = $$('[data-intro]');
  if (autres.length) tl.fromTo(autres, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, t0 + 0.1);
  const mot = $('.mot-couture');
  if (mot) tl.fromTo(mot, { '--couture-p': 0 }, { '--couture-p': 1, duration: 0.7, ease: 'power2.inOut' }, t0 + 0.55);
  /* L'image d'ouverture de l'accueil se rapproche lentement de l'aiguille, une seule fois (hors de la timeline : l'intro reste courte). */
  const img = $('.ouv-accueil-media img');
  if (img) tl.call(() => gsap.fromTo(img, { scale: 1 }, { scale: 1.06, duration: 6, ease: 'sine.out', transformOrigin: '55% 50%' }), null, t0 + 0.2);
  const vn = $('[data-vingt-neuf]');
  if (vn) { const o = { n: 0 }; tl.call(() => gsap.to(o, { n: 29, duration: 1.1, ease: 'power2.out', onUpdate: () => { vn.textContent = Math.round(o.n); } }), null, t0); }
  const cv = $('[data-effet="carte-visite"]');
  if (cv) tl.fromTo(cv, { rotationX: 12, transformPerspective: 900 }, { rotationX: 0, duration: 0.9, ease: 'power3.out' }, t0);
}
function final() {
  if (!gsap) return;
  gsap.set($$(PREMIER), { clearProps: 'transform,opacity' });
  const mot = $('.mot-couture'); if (mot) mot.style.setProperty('--couture-p', '1');
  const vn = $('[data-vingt-neuf]'); if (vn) vn.textContent = '29';
  const img = $('.ouv-accueil-media img'); if (img) gsap.set(img, { scale: 1.06, transformOrigin: '55% 50%' });
  const cv = $('[data-effet="carte-visite"]'); if (cv) gsap.set(cv, { rotationX: 0 });
}

demarrer({
  preparer() {
    statuts();
    setInterval(statuts, 60000);
    catalogue();
    tarifs();
    demande();
    quand('pret', effets);
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45 }, 0)
      .fromTo('.ouverture-trait', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power1.inOut' }, 0.2)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.25 }, 0.95);
    versObjet(tl, { a: 1.0 });
    arriveePremierEcran(tl, 1.5);
    return tl;
  },
  etatFinal() { final(); },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.12 });
    arriveePremierEcran(tl, 0);
  },
});
