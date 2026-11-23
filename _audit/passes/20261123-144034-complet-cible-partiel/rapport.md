# Rapport d’audit

Projet : `emaginacoudre-maquette` · 23/11/2026 15:45:54 · 5 min · 2 page(s) · audit complet ciblé sur /,/atelier (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261123-144034-complet-cible-partiel` · version ?v=2
- Échecs : **3**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (78), balayage (2), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (16), liens vers la page en cours (2), changements de hauteur (2), parcours du projet (1)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-141121-complet | complet | toutes | toutes | 3 | 14 | 1 | échecs |
| **20261123-144034-complet-cible-partiel** (celle-ci) | complet | /,/atelier | fichiers, mesures, parcours | 3 | 5 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — div.duo-volets > article.duo-volet.duo-volet--pascal:nth-of-type(2) > div.duo-texte > p « Technicien en électronique et en micromécanique, v » — coupé par section#michele-et-pascal « Michèle conseille, Pascal répare Michèle conseille » _(844×390 normal, 768×1024 normal, 1024×768 normal, 1000×560 normal, 844×390 sansWebgl, 768×1024 sansWebgl, +2)_

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/atelier` — Choisi : Entretien — décalage de 28 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/atelier` — Choisi : Révision — décalage de 3 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (3)

- **section sans visuel** — `/` — section#quelle-machine « Quelle machine pour quoi ? Chaque machine a sa cou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/atelier` — section#deroule « Trois étapes, pas de surprise 1 Le diagnostic En b » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#tarifs « Les tarifs de l'atelier Choisissez une prestation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 10 min de travail pour 40 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

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
