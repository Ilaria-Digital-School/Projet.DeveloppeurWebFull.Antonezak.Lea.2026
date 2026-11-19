# Agence Frisk

Site vitrine d'une agence de communication, conçu pour présenter
l'agence, mettre en valeur ses réalisations et partager ses actualités.

## Présentation du projet

Le site **Agence Frisk** a pour objectif de donner une visibilité à
l'agence de communication et de permettre aux visiteurs de découvrir son univers,
ses projets et ses contenus, puis de prendre contact facilement.

L'architecture repose sur une navigation simple depuis la page d'accueil
vers les principales rubriques.

## Arborescence du site

-   **Accueil**
    -   Accès aux principales rubriques
    -   Mise en avant des derniers articles du blog
    -   Appels à l'action (CTA) vers le contact et le portfolio
-   **Contact**
    -   Informations et formulaire permettant de contacter l'agence
-   **Portfolio**
    -   Présentation des projets réalisés
    -   Navigation entre les projets : projet précédent / projet suivant
-   **À propos**
    -   Présentation de l'agence et de son identité
-   **Blog**
    -   Liste des articles
    -   Accès aux derniers articles depuis la page d'accueil
    -   Navigation entre les articles : article précédent / article
        suivant

Accueil
  │
  ├── Contact
  │
  ├── Portfolio
  │     │
  │     ├── Projet 1
  │     ├── Projet 2
  │     └── Projet ...
  │
  ├── À propos
  │
  └── Blog
        │
        ├── Article 1
        ├── Article 2
        └── Article ...

## Navigation et parcours utilisateur

La navigation doit permettre au visiteur de rejoindre les pages
principales depuis l'accueil.

Les parcours prévus sont les suivants :

-   Depuis l'accueil, les visiteurs peuvent accéder au **Contact**, au
    **Portfolio**, à la page **À propos** et au **Blog**.
-   Des appels à l'action encouragent la prise de contact, notamment
    depuis l'accueil et les pages de présentation.
-   Le portfolio permet de consulter les projets individuellement et de
    passer d'un projet au précédent ou au suivant.
-   Le blog permet de consulter les articles individuellement et de
    naviguer entre les publications.
-   Les derniers articles sont mis en avant sur la page d'accueil afin
    de rendre les contenus récents plus accessibles.

## Fonctionnalités principales

-   Menu de navigation vers les pages principales.
-   Appels à l'action (CTA) visibles et cohérents.
-   Présentation des réalisations dans le portfolio.
-   Pages détaillées pour chaque projet.
-   Blog avec liste des articles et pages individuelles.
-   Mise en avant des derniers articles sur l'accueil.
-   Navigation entre les projets et entre les articles.
-   Accès simple aux informations de contact.

## Pages à prévoir

  -----------------------------------------------------------------------
  Page                                Contenu attendu
  ----------------------------------- -----------------------------------
  Accueil                             Présentation synthétique de
                                      l'agence, accès aux rubriques, CTA
                                      et derniers articles

  Contact                             Coordonnées et formulaire de
                                      contact

  Portfolio                           Vue d'ensemble des réalisations

  Projet (détail)                     Présentation d'un projet, avec
                                      liens vers le projet précédent et
                                      suivant

  À propos                            Présentation de l'agence, de son
                                      approche et de son identité

  Blog                                Liste des articles publiés

  Article (détail)                    Contenu d'un article, avec liens
                                      vers l'article précédent et suivant
  -----------------------------------------------------------------------

## Technologies

-   **Structure :** HTML
-   **Styles :** CSS
-   **Interactions :** JavaScript
-   **Éditeur de code :** Visual Studio Code
-   **Gestion de versions :** Git / GitHub
-   **Environnement de test :** Google Chrome
-   **Outils de validation et de qualité :** Google Lighthouse, W3C Validator

## Installation et lancement

Les commandes d'installation et de lancement seront ajoutées en fonction
de l'environnement technique retenu.

## Accessibilité (RGAA / WCAG)

-   Structure sémantique : Utilisation des balises (header, nav, main, section,
    article, footer) avec une hiérarchie stricte des titres.
-   Navigation au clavier.
-   Utilisation de `aria-label`
-   Médias et formulaires : Attributs `alt` descriptifs sur les visuels du portfolio, 
    balises `<label>` associées aux champs du formulaire de contact et contrastes
    validés.
-   Liens et boutons avec des intitulés explicites.

### Éco-conception web

-   Optimisation des images : Conversion des maquettes au format webp, dimensionnement 
    adapté.
-   Limitation des animations et effets visuels superflus.
-   Réduction du nombre de scripts.
-   Minification des fichiers CSS et JavaScript.
-   Optimisation du poids des pages et des ressources.
-   Suppression du code et des fonctionnalités inutilisés.
-   Choix d'un hébergement performant et adapté.

## Pistes d'amélioration

-   Prévoir une navigation responsive adaptée aux mobiles, tablettes et
    ordinateurs.
-   Ajouter des balises SEO pertinentes (titres, descriptions et
    structure des pages).

## Jeu d'essai fonctionnel et Tests
Captures d'écran dans le dossier `/C3/rapports/html-css` et `/C3/rapports/Lighthouse` 

## Responsive
Captures d'écran dans le dossier `/C3/Responsive/Desktop`, `/C3/Responsive/mid`
et `/C3/Responsive/mobile`

## English Technical Summary (B1 Level)
*Note : Résumé d'une source technique en anglais consultée pour l'intégration 
responsive et accessible du projet.*

-   **Source :** MDN Web Docs — Responsive design
(https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
-   **Summary:**  
Responsive design is an approach that allows a website to adapt to different screen
sizes and devices, from smartphones to desktop monitors. According to MDN documentation,
this is achieved by using fluid grids, flexible images, and CSS media queries.
Tools such as CSS Grid and Flexbox make it possible to adapt website sections to
different screen sizes. For example, a multi-column portfolio gallery or a blog list can 
automatically switch to a single-column layout on smaller screens, without duplicating
HTML code. Adopting a Mobile First approach, which consists of designing the website for
smaller screens first, helps ensure better readability, accessibility, and user experience
across all devices.

## Statut du projet

Projet en cours de conception. Les contenus, choix graphiques et technologies pourront
être précisés au fil du développement.

