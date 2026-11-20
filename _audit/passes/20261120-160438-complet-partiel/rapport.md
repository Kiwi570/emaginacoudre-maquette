# Rapport d’audit

Projet : `emaginacoudre-maquette` · 20/11/2026 17:11:23 · 7 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-160438-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **7**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-150740-rapide | rapide | toutes | toutes | 349 | 6 | 1 | échecs |
| 20261120-152023-rapide-cible | rapide | /machines,/atelier,/prise-en-main,/la-maison,/contact,/404 | toutes | 15 | 19 | 1 | échecs |
| 20261120-153941-standard | standard | toutes | toutes | 11 | 14 | 1 | échecs |
| 20261120-155816-standard-partiel | standard | toutes | fichiers, mesures, parcours | 0 | 9 | 0 | complet |
| **20261120-160438-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 7 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-accueil-texte > p.info-cle:nth-of-type(4) « Du mercredi au samedi, 9 h 30-12 h 30 et 14 h-18 h » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.info-cle:nth-of-type(3) « Du mercredi au samedi, 9 h 30-12 h 30 et 14 h-18 h » _(844×390 sansJs)_

## À regarder

### section sans visuel (7)

- **section sans visuel** — `/atelier` — section#deroule « Trois étapes, pas de surprise 1 Le diagnostic En b » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#tarifs « Les tarifs de l'atelier Choisissez une prestation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-maison` — section#histoire « De la microélectronique à la boutique Avant Pascal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/la-maison` — section#actualites « Les actualités Nouveaux horaires La boutique est d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/machines` — section#prix « Comment lire les prix Brother Le prix affiché est  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/machines` — section#debut « 22 machines, à essayer avant de choisir. Demander  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/prise-en-main` — section#questions « Vos questions La prise en main est-elle comprise ? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-maison : aucune section épinglée ou plein écran.
- Tient dans l'écran /machines : aucune section épinglée ou plein écran.
- Tient dans l'écran /prise-en-main : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404 --seulement=fichiers,mesures
```
