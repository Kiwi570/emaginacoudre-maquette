# Rapport d’audit

Projet : `emaginacoudre-maquette` · 20/11/2026 16:54:17 · 15 min · 7 page(s) · audit standard

## Résumé

- Statut : **11 échec(s)**
- Passe : `20261120-153941-standard` · version ?v=1
- Échecs : **11**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (3), parcours du projet (1), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (14), souris immobile (3), vitesse (6), captures (1)

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
| 20261120-152023-rapide-cible | rapide | /machines,/atelier,/prise-en-main,/la-maison,/contact,/404 | toutes | 15 | 19 | 1 | échecs |
| **20261120-153941-standard** (celle-ci) | standard | toutes | toutes | 11 | 14 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-accueil-texte > p.info-cle:nth-of-type(4) « Ouvert, jusqu'à 18 h 30 4 rue Alain-René Lesage, V » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/machines` — section#debut > div.conteneur:nth-of-type(1) > div.ouv-machines-bas > p.info-cle:nth-of-type(2) « Prise en main comprise dans chaque prix affiché » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.conteneur.reperes-grille > div.reperes-chiffre > p.grand-nombre:nth-of-type(1) > span « 10 000 » — avec section#reperes > div.conteneur.reperes-grille > div.reperes-chiffre > h2.grand-chiffre « 10 000 machines remises en route » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.conteneur.reperes-grille > div.reperes-chiffre > p.grand-nombre:nth-of-type(1) > span « 10 000 » — avec div.conteneur.reperes-grille > div.reperes-chiffre > h2.grand-chiffre > em « remises en route » _(768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +3)_
- **textes qui se chevauchent** — `/la-maison` — section#debut > div.conteneur.ouv-maison-texte > p.surtitre.masque-ecran-tres-bas:nth-of-type(1) « Michèle et Pascal Zimmer » — avec div.conteneur.ouv-maison-texte > h1 > span.nombre-geant:nth-of-type(1) > span « 29 » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, 1366×768 normal, +4)_
- **textes qui se chevauchent** — `/la-maison` — div.conteneur.ouv-maison-texte > h1 > span.nombre-geant:nth-of-type(1) > span « 29 » — avec section#debut > div.conteneur.ouv-maison-texte > h1 > span.ouv-maison-mots:nth-of-type(2) « ans de machines à coudre. » _(768×1024 normal)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/atelier` — div.conteneur.industrie-grille > figure.media.industrie-media > picture > img « Test électronique d'une machine en panne, à l'atel » — atelier-test (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.ouv-contact-grille > div.carte-visite > p:nth-of-type(3) > a.bouton « Préparer ma visite » _(320×568 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/la-maison` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 379 px — largeurs : 320, 360, 800 px _(balayage 320–1920 normal)_

### lien profond (1)

- **lien profond** — `/ → /machines?type=combinee#catalogue` — section pas en haut de l'écran (644 px) _(1366×768 lien profond)_

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

- **section sans visuel** — `/atelier` — section#deroule « Trois étapes, pas de surprise 1 Le diagnostic En b » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/atelier` — section#tarifs « Les tarifs de l'atelier Choisissez une prestation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/la-maison` — section#histoire « De la microélectronique à la boutique Avant Pascal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/la-maison` — section#actualites « Les actualités Nouveaux horaires La boutique est d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/machines` — section#prix « Comment lire les prix Brother Le prix affiché est  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/machines` — section#debut « 22 machines, à essayer avant de choisir. Demander  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/prise-en-main` — section#questions « Vos questions La prise en main est-elle comprise ? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/prise-en-main` — figure.citation > figure.media.citation-media > picture > img « Michèle, qui conseille et forme à la boutique » — michele (3/5, 60 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### rechargement (1)

- **rechargement** — `/machines` — la page ne repart pas du haut pour l'intro (567 px) _(1366×768)_

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
- Journal v1 : 5 étape(s) notée(s), 68 min de travail pour 115 min de budget, 46 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /atelier, /machines.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2903 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2630 ms depuis le premier octet
- Ouverture /machines (1366×768) : 2682 ms depuis le premier octet
- Ouverture / (390×844) : 2903 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2625 ms depuis le premier octet
- Ouverture /machines (390×844) : 2608 ms depuis le premier octet
- film de l'ouverture /machines 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 338 images d’intro, 9 de voile et 103 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /machines : aucune section épinglée ou plein écran.
- Tient dans l'écran /prise-en-main : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 381, tâche la plus longue 0 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité /machines 1366×768 (molette) : 0 % d'images lentes sur 300, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1330, tâche la plus longue 0 ms
- Fluidité /machines 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /machines : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /prise-en-main : 0.24 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
