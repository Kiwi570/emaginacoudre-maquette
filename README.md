# E-maginacoudre · maquette

Maquette du futur site d'E-maginacoudre (Michèle et Pascal Zimmer, machines à coudre à Vannes), direction « Coton & framboise ».
Adresse prévue : https://emaginacoudre-maquette.vercel.app

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Écran partagé, titre et gros plan sur l'aiguille | Quelle machine pour quoi (quatre coutures), vitrine de six machines, Michèle et Pascal, l'atelier et ses tarifs, 10 000 machines, la boutique et ses horaires, appel final |
| Machines `/machines` | Grand titre, filtres, bandeau de machines | 22 machines Brother et Babylock avec leurs prix, filtres par type et par marque (gardés dans l'adresse), comment lire les prix, conseil, machines industrielles |
| Atelier `/atelier` | Photo pleine hauteur, « 0 € » en très grand | Déroulé, tarifs à choisir (récapitulatif et lien prérempli), révision, familiales et industrielles |
| Prise en main `/prise-en-main` | Grand titre puis bandeau photo | Avant, pendant, après ; citation de Michèle ; cours de couture avec Camille ; questions |
| La maison `/la-maison` | Plein cadre, « 29 » géant | Frise 1997 → 2025, Michèle et Pascal, marques, actualités et dates Babylock, la boutique en images, la vitrine |
| Contact `/contact` | Carte de visite et mur de bobines | Demande simulée préremplie (essai d'une machine, passage à l'atelier, question), horaires de la semaine |
| 404 | « Point sauté » | |

Pages du site actuel non reprises (disponibles en v2) : Brodeuses (page sans noms ni prix sur le site actuel), Galerie de photos (reprise en partie sur La maison), pages de marque Brother et Babylock (fusionnées dans Machines).

## À fournir par le client

Pied de page et formulaires :
- Mentions légales : à compléter (raison sociale E-MAGINACOUDRE SARL au capital de 10 000 €, RCS Vannes 2011 B 526, SIRET 533 762 381 00010, APE 4754 Z, TVA FR 00 533 762 381, 4 rue Alain-René Lesage 56000 Vannes, co-gérants Michèle et Pascal Zimmer ; directeur de la publication à préciser).
- Hébergeur : Vercel Inc. (adresse à vérifier sur le site de Vercel au moment de la mise en ligne).
- Politique de confidentialité (RGPD) : à compléter.
- Crédits : photos du site actuel ; les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok) : garder cette mention sur le site final.

Retiré ou remplacé faute d'information :
- Recouvreuse Euphoria : prix affiché « Prix et démonstration en boutique » (le site actuel indique 1 199 € au catalogue et « vendue 1 798 € (-10 %) », ce qui est impossible).
- Sixième fiche Brother « F410 » en double (l'image est celle de la F420) : retirée du catalogue.
- Coudre-brodeuses Innov-is F480, V5, V7, XV : aucun prix sur le site actuel (« Prix et démonstration en boutique »).
- Babylock Enspire : pas de photo sur le site actuel (silhouette dessinée en attendant).
- Photos des surjeteuses : l'attribution 2104D / 4234D et Victory / Enlighten / Acclaim est déduite des noms visibles sur les machines ; à vérifier.
- Délais de réparation et garantie : non indiqués sur le site actuel, donc absents.
- Accès et stationnement : non indiqués (lien d'itinéraire seulement).
- Dates des actualités : non indiquées sur le site actuel.
- E-mail : deux adresses différentes sur le site actuel (emaginacoudre@orange.fr et contact@emaginacoudre.com) ; la maquette affiche celle des mentions légales.

## À la mise en ligne définitive

- Retirer : la consigne `noindex` (gabarit `source/gabarits/commun.mjs` et `vercel.json`), le formulaire simulé (à brancher sur un vrai envoi), la mention « à compléter » du pied de page une fois les pages légales fournies.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; machines et prix : `donnees/machines.json` ; horaires : `donnees/horaires.json`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les pages `.html` à la main).
- Audit : `node _audit/audit.mjs` (standard), `--complet` pour la version finale.
- La base commune (socle) est décrite dans `_suivi/socle-README.md`.
