# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux publics distincts, servis par le même site :
- **B2C** : particuliers à Cotonou et Abomey-Calavi qui achètent des infusions naturelles pour leur consommation personnelle, commande via catalogue puis WhatsApp.
- **B2B** : entreprises de Cotonou et Abomey-Calavi qui cherchent un service de petit-déjeuner récurrent ou un service traiteur pour des événements professionnels, contact via formulaire.

## Product Purpose

BenDjo vend des infusions naturelles fabriquées au Bénin à partir d'ingrédients locaux (hibiscus, basilic, citronnelle, clou de girofle), et propose un service de petit-déjeuner et de restauration en entreprise. Le site sert de catalogue + point de contact ; aucun paiement en ligne, la commande se conclut par WhatsApp (B2C) ou formulaire (B2B).

## Positioning

Positionnement : *"La marque qui vous reconnecte à vos origines."* Ancrage béninois réel (ingrédients locaux, fabrication au Bénin) plutôt qu'un habillage "bio/wellness" générique importé — c'est la différence avec une marque de thé occidentale qui vendrait des infusions africaines sans lien de production local.

## Operating Context

- Catalogue web → commande B2C via lien `wa.me` pré-rempli (numéro WhatsApp Business confirmé).
- Formulaire de contact pour les demandes B2B (petit-déjeuner entreprise, traiteur événementiel) — pas de tunnel d'achat en ligne pour ce volet, la suite se passe hors-site.
- Site statique (pas de backend, pas de compte utilisateur, pas de paiement en ligne).

## Capabilities and Constraints

- Stack : React 19, TypeScript, Tailwind CSS v4 (config CSS-first), React Router 7, Vite 8. Déploiement visé : Vercel.
- Décision active : pas de Framer Motion ni de librairie d'icônes générique tant que non strictement nécessaire (minimalisme des dépendances).
- Prix confirmé : 1500 FCFA par boîte de 10 sachets, identique pour toutes les infusions actuelles.
- Non décidé / non confirmé (voir MEMORY/QUESTIONS.md dans le repo) : biographie de la fondatrice, année de fondation officielle, processus de fabrication, zones de livraison, horaires, tarification du service traiteur/petit-déjeuner.

## Brand Commitments

- Nom : BenDjo. Tagline confirmée : "La marque qui vous reconnecte à vos origines."
- Email confirmé : bendjobenin@gmail.com. Téléphone confirmé : +229 01 53 14 80 13. WhatsApp Business confirmé : +229 01 62 01 41 61.
- Aucun symbole culturel africain identifiable (masque, motif traditionnel précis) ne doit être utilisé sans validation explicite du client — BenDjo raconte sa propre histoire, pas une esthétique africaine générique.

## Evidence on Hand

- Packaging réel et photographies produit professionnelles (hibiscus, basilic, citronnelle) disponibles dans le repo (`src/assets/images/products/`).
- Aucune biographie de fondatrice, aucun historique de création confirmé — à ne jamais inventer tant que MEMORY/QUESTIONS.md ne le liste pas comme répondu.
- Aucun témoignage client, étude de cas ou chiffre d'activité vérifié au-delà de ce qui est explicitement confirmé ci-dessus.

## Product Principles

1. Ne jamais afficher un fait non confirmé (prix, historique, biographie) sans le tracer d'abord comme répondu dans MEMORY/QUESTIONS.md.
2. Le B2C (catalogue + WhatsApp) et le B2B (petit-déjeuner/traiteur + formulaire) restent deux parcours distincts et clairement séparés, jamais fusionnés en un tunnel unique.
3. Le site reste statique et léger : pas de compte utilisateur, pas de paiement en ligne tant que le client ne le demande pas explicitement.
4. Priorité à l'authenticité béninoise réelle sur l'esthétique "bio générique" — chaque choix produit doit pouvoir se justifier par un fait local, pas par une convention de catégorie.

## Accessibility & Inclusion

Cible WCAG 2.1 AA (cf. DEVELOPMENT/CODING_STANDARDS.md et SEO.md du repo) : contraste vérifié, navigation clavier, `prefers-reduced-motion` respecté, HTML sémantique en priorité.
