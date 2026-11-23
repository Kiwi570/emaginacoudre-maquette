# Rapport d’audit

Projet : `emaginacoudre-maquette` · 23/11/2026 15:37:53 · 27 min · 7 page(s) · audit complet

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261123-141121-complet` · version ?v=2
- Échecs : **3**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (8), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (17), souris immobile (7), vitesse (6), captures (1)

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

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — div.duo-volets > article.duo-volet.duo-volet--pascal:nth-of-type(2) > div.duo-texte > p « Technicien en électronique et en micromécanique, v » — coupé par section#michele-et-pascal « Michèle conseille, Pascal répare Michèle conseille » _(2560×1440 normal, 2560×1440 sansWebgl)_

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/atelier` — Choisi : Entretien — décalage de 28 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/atelier` — Choisi : Révision — décalage de 4 px _(1366×768)_

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

- **section sans visuel** — `/` — section#quelle-machine « Quelle machine pour quoi ? Chaque machine a sa cou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/atelier` — section#deroule « Trois étapes, pas de surprise 1 Le diagnostic En b » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#tarifs « Les tarifs de l'atelier Choisissez une prestation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-maison` — section#actualites « Les actualités Nouveaux horaires La boutique est d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/machines` — section#prix « Comment lire les prix Brother Le prix affiché est  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/machines` — section#debut « 22 machines, à essayer avant de choisir. Demander  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/prise-en-main` — section#questions « Vos questions La prise en main est-elle comprise ? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +15)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 10 min de travail pour 40 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2895 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2633 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2574 ms depuis le premier octet
- Ouverture /la-maison (1366×768) : 2621 ms depuis le premier octet
- Ouverture /machines (1366×768) : 2623 ms depuis le premier octet
- film de l'ouverture /machines 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prise-en-main (1366×768) : 2502 ms depuis le premier octet
- Ouverture / (390×844) : 2899 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2615 ms depuis le premier octet
- Ouverture /contact (390×844) : 2529 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-maison (390×844) : 2557 ms depuis le premier octet
- Ouverture /machines (390×844) : 2671 ms depuis le premier octet
- film de l'ouverture /machines 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prise-en-main (390×844) : 2466 ms depuis le premier octet
- bords de l’écran /machines 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 619 images d’intro, 15 de voile et 179 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /machines : aucune section épinglée ou plein écran.
- Tient dans l'écran /prise-en-main : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 498, tâche la plus longue 54 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 164, tâche la plus longue 0 ms
- Fluidité /la-maison 1366×768 (molette) : 0 % d'images lentes sur 326, tâche la plus longue 0 ms
- Fluidité /machines 1366×768 (molette) : 0 % d'images lentes sur 377, tâche la plus longue 0 ms
- Fluidité /prise-en-main 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /la-maison 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /machines 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /prise-en-main 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-maison : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /machines : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /prise-en-main : 0.37 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/atelier --seulement=fichiers,mesures,parcours
```
