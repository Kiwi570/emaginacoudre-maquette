# Rapport d’audit

Projet : `emaginacoudre-maquette` · 20/11/2026 16:13:12 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **349 échec(s)**
- Passe : `20261120-150740-rapide` · version ?v=1
- Échecs : **349**
- À regarder : **6**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (14), souris immobile (1), vitesse (1), captures (1)

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

### image de partage (6)

- **image de partage** — `atelier.html` — fichier introuvable : /assets/partage/atelier-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-maison.html` — fichier introuvable : /assets/partage/la-maison-fr.jpg
- **image de partage** — `machines.html` — fichier introuvable : /assets/partage/machines-fr.jpg
- **image de partage** — `prise-en-main.html` — fichier introuvable : /assets/partage/prise-en-main-fr.jpg

### langues (331)

- **langues** — texte manquant en en : commun.legal
- **langues** — texte manquant en en : commun.horairesCourts
- **langues** — texte manquant en en : commun.horairesNote
- **langues** — texte manquant en en : commun.itineraire
- **langues** — texte manquant en en : commun.facebook
- **langues** — texte manquant en en : commun.avis
- **langues** — texte manquant en en : commun.prixComprise
- **langues** — texte manquant en en : commun.prixBoutique
- **langues** — texte manquant en en : commun.prixVendue
- **langues** — texte manquant en en : commun.prixAuLieu
- **langues** — texte manquant en en : commun.prixCatalogue
- **langues** — texte manquant en en : commun.essayer
- **langues** — texte manquant en en : commun.nouvelOnglet
- **langues** — texte manquant en en : commun.jours
- **langues** — texte manquant en en : pages.machines.titre
- **langues** — texte manquant en en : pages.machines.description
- **langues** — texte manquant en en : pages.machines.nav
- **langues** — texte manquant en en : pages.machines.partageAlt
- **langues** — texte manquant en en : pages.machines.accroche
- **langues** — texte manquant en en : pages.atelier.titre
- **langues** — texte manquant en en : pages.atelier.description
- **langues** — texte manquant en en : pages.atelier.nav
- **langues** — texte manquant en en : pages.atelier.partageAlt
- **langues** — texte manquant en en : pages.atelier.accroche
- **langues** — texte manquant en en : pages.prise-en-main.titre
- **langues** — texte manquant en en : pages.prise-en-main.description
- **langues** — texte manquant en en : pages.prise-en-main.nav
- **langues** — texte manquant en en : pages.prise-en-main.partageAlt
- **langues** — texte manquant en en : pages.prise-en-main.accroche
- **langues** — texte manquant en en : pages.la-maison.titre
- **langues** — texte manquant en en : pages.la-maison.description
- **langues** — texte manquant en en : pages.la-maison.nav
- **langues** — texte manquant en en : pages.la-maison.partageAlt
- **langues** — texte manquant en en : pages.la-maison.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- **langues** — texte manquant en en : statut.ouvert
- … et 291 autres (rapport.json)

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.conteneur.reperes-grille > div.reperes-chiffre > h2.grand-chiffre > span:nth-of-type(1) « 10 000 » — avec div.conteneur.reperes-grille > div.reperes-chiffre > h2.grand-chiffre > span.grand-chiffre-mot:nth-of-type(2) « machines remises en route » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.reperes-grille > div.reperes-chiffre > h2.grand-chiffre > span:nth-of-type(1) « 10 000 » — avec div.reperes-chiffre > h2.grand-chiffre > span.grand-chiffre-mot:nth-of-type(2) > em « remises en route » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs)_

### élément sans nom accessible (1)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(1366×768 normal, 390×844 normal, 390×844 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.conteneur.atelier-grille > figure.media.atelier-media > picture > img « Une machine ouverte sur l'établi de l'atelier » — atelier-coeur (3/5, faible, 40 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.atelier-grille > figure.media.atelier-media > picture > img « Une machine ouverte sur l'établi de l'atelier » — atelier-coeur (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### texte coupé (3)

- **texte coupé** — `/` — div.duo-volets > article.duo-volet.duo-volet--michele:nth-of-type(1) > div.duo-texte > h3 « Michèle conseille et forme » — coupé par section#michele-et-pascal « Michèle conseille, Pascal répare Michèle conseille » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.duo-volets > article.duo-volet.duo-volet--michele:nth-of-type(1) > div.duo-texte > p « Passionnée de broderie et de couture depuis toujou » — coupé par section#michele-et-pascal « Michèle conseille, Pascal répare Michèle conseille » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.duo-volets > article.duo-volet.duo-volet--michele:nth-of-type(1) > div.duo-texte > a.lien-fleche « La prise en main » — coupé par section#michele-et-pascal « Michèle conseille, Pascal répare Michèle conseille » _(390×844 normal, 390×844 sansWebgl)_

### élément recouvert (3)

- **élément recouvert** — `/` — section#fin > div.conteneur.fin-cadre > h2 « Venez l'essayer avant de choisir. » — par section#fin > div.conteneur.fin-cadre > svg.fin-couture _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — section#fin > div.conteneur.fin-cadre > p.ouv-actions.fin-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Préparer ma visite » — par section#fin > div.conteneur.fin-cadre > svg.fin-couture _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — section#fin > div.conteneur.fin-cadre > p.ouv-actions.fin-actions:nth-of-type(2) > a.bouton.bouton--contour:nth-of-type(2) « Appeler 02 97 61 20 12 » — par section#fin > div.conteneur.fin-cadre > svg.fin-couture _(1366×768 normal, 390×844 normal)_

### transition : élément visible, caché puis réaffiché (flash) (1)

- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /machines` — div.ruban-machines-piste > div.ruban-machine > img _(1366×768 film, 390×844 film)_

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

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.ouv-accueil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

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
- Journal v1 : 0 étape(s) notée(s), 0 min de travail, 0 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2893 ms depuis le premier octet
- Ouverture / (390×844) : 2882 ms depuis le premier octet
- Bords de l’écran : 95 images d’intro, 3 de voile et 26 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 373, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films
```
