# Rapport d’audit

Projet : `emaginacoudre-maquette` · 20/11/2026 16:36:45 · 16 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /machines,/atelier,/prise-en-main,/la-maison,/contact,/404

## Résumé

- Statut : **15 échec(s)**
- Passe : `20261120-152023-rapide-cible` · version ?v=1
- Échecs : **15**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (14), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-150740-rapide | rapide | toutes | toutes | 349 | 6 | 1 | échecs |
| **20261120-152023-rapide-cible** (celle-ci) | rapide | /machines,/atelier,/prise-en-main,/la-maison,/contact,/404 | toutes | 15 | 19 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/atelier` — section#debut > div.ouv-atelier-texte > p.ouv-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Préparer mon passage » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/machines` — div.conteneur:nth-of-type(1) > div.ouv-machines-bas > p:nth-of-type(3) > a.bouton « Demander un essai » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/prise-en-main` — div.ouv-pem-bas > div > p.ouv-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Préparer ma visite » _(320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/atelier` — section#debut > div.ouv-atelier-texte > p.prix-geant:nth-of-type(2) > strong « 0 € » — avec section#debut > div.ouv-atelier-texte > p:nth-of-type(3) « Machines à coudre, brodeuses et surjeteuses, famil » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **textes qui se chevauchent** — `/atelier` — section#debut > div.ouv-atelier-texte > p.prix-geant:nth-of-type(2) > strong « 0 € » — avec section#debut > div.ouv-atelier-texte > p.prix-geant:nth-of-type(2) > span « le diagnostic, en boutique » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/la-maison` — section#debut > div.conteneur.ouv-maison-texte > p.surtitre:nth-of-type(1) « Michèle et Pascal Zimmer » — avec div.conteneur.ouv-maison-texte > h1 > span.nombre-geant:nth-of-type(1) > span « 29 » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/la-maison` — div.conteneur.ouv-maison-texte > h1 > span.nombre-geant:nth-of-type(1) > span « 29 » — avec section#debut > div.conteneur.ouv-maison-texte > h1 > span.ouv-maison-mots:nth-of-type(2) « ans de machines à coudre. » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/atelier` — div.conteneur.industrie-grille > figure.media.industrie-media > picture > img « Test électronique d'une machine en panne, à l'atel » — atelier-test (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/la-maison` — article.personne:nth-of-type(2) > figure.media.personne-media > picture > img « Pascal à l'établi de l'atelier » — pascal (3/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/la-maison` — section#marques > div.marques-ruban:nth-of-type(1) > p:nth-of-type(1) « Brother · Babylock · Pfaff · Janome · Bernina · Ju » — 1.43:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/la-maison` — section#marques > div.marques-ruban:nth-of-type(1) > p:nth-of-type(2) « Brother · Babylock · Pfaff · Janome · Bernina · Ju » — 1.43:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/la-maison` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/la-maison` — section#debut > div.conteneur.ouv-maison-texte > p.ouv-actions:nth-of-type(3) > span.info-cle « Depuis 1997, à Vannes depuis 2012 » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/prise-en-main` — div.conteneur.ouv-pem-tete > div.ouv-pem-bas > div > p.info-cle:nth-of-type(1) « Comprise dans le prix de chaque machine » _(320×568 sansJs)_

### accessibilité (axe) : aria-allowed-attr (1)

- **accessibilité (axe) : aria-allowed-attr** — `/machines` — a[href$="#catalogue"]:nth-child(1) ; a[href="?type=coudre#catalogue"] ; a[href="?type=brodeuse#catalogue"] — Elements must only use supported ARIA attributes _(390×844 normal, 1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (7)

- **section sans visuel** — `/atelier` — section#deroule « Trois étapes, pas de surprise 1 Le diagnostic En b » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/atelier` — section#tarifs « Les tarifs de l'atelier Choisissez une prestation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/la-maison` — section#histoire « De la microélectronique à la boutique Avant Pascal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/la-maison` — section#actualites « Les actualités Nouveaux horaires La boutique est d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/machines` — section#prix « Comment lire les prix Brother Le prix affiché est  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/machines` — section#debut « 22 machines, à essayer avant de choisir. Les prix  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/prise-en-main` — section#questions « Vos questions La prise en main est-elle comprise ? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/la-maison` — div.conteneur.vitrine-maison-grille > figure.media.vitrine-maison-media > picture > img « La vitrine de la boutique, à Vannes » — boutique-vitrine (3/5, 42 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/prise-en-main` — figure.citation > figure.media.citation-media > picture > img « Michèle, qui conseille et forme à la boutique » — michele (3/5, 60 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### typographie française (1)

- **typographie française** — `/prise-en-main` — div.conteneur.temps-grille > figure.citation > blockquote > p « « Je les assiste lorsqu'elles reviennent au magasi » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/atelier` — à 69 ms (différence 71 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/atelier` — à 66 ms (différence 62 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/machines` — à 82 ms (différence 63 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/machines` — adresse non mise à jour ( au lieu de #catalogue)

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 10 min de travail pour 30 min de budget, 46 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /atelier, /contact, /la-maison, /machines, /prise-en-main.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /atelier (1366×768) : 2605 ms depuis le premier octet
- film de l'ouverture /atelier 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2511 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2548 ms depuis le premier octet
- Ouverture /machines (1366×768) : 2591 ms depuis le premier octet
- Ouverture /prise-en-main (1366×768) : 2488 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2602 ms depuis le premier octet
- film de l'ouverture /atelier 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2534 ms depuis le premier octet
- Ouverture /la-maison (390×844) : 2553 ms depuis le premier octet
- Ouverture /machines (390×844) : 2627 ms depuis le premier octet
- film de l'ouverture /machines 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prise-en-main (390×844) : 2477 ms depuis le premier octet
- Bords de l’écran : 456 images d’intro, 11 de voile et 127 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /machines : aucune section épinglée ou plein écran.
- Tient dans l'écran /prise-en-main : aucune section épinglée ou plein écran.
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 228, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 173, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 379, tâche la plus longue 0 ms
- Fluidité /machines 1366×768 (molette) : 0 % d'images lentes sur 293, tâche la plus longue 0 ms
- Fluidité /prise-en-main 1366×768 (molette) : 0 % d'images lentes sur 226, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /machines 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /prise-en-main 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse /atelier : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /machines : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /prise-en-main : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/atelier,/la-maison,/machines,/prise-en-main --seulement=fichiers,mesures
```
