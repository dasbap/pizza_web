
# PizzaWorld - Site Pizzeria avec Mini Framework React

## Description

PizzaWorld est un site vitrine pour une pizzeria, créé à l'aide d'un mini-framework inspiré de React. Ce projet est une démonstration de la création d'un framework personnalisé pour gérer des composants et rendre un DOM virtuel de manière déclarative.

## Fonctionnalités

- **Gestion du DOM virtuel** : Un mini-framework permet de rendre dynamiquement le contenu du site.
- **Composants** : Création de composants personnalisés pour afficher des éléments comme des pizzas, un titre, et un menu.
- **Site responsive** : Affichage adapté sur différents appareils grâce à du CSS simple.

## Structure du projet

```
pizza-site/
├── index.html          # Page d'accueil du site
├── main.js             # Logique principale de l'application
├── framework/          # Code source du mini-framework
│   ├── tiny-react.js   # Framework pour la gestion du DOM
│   └── component.js    # Composants de base
├── styles.css          # Styles de l'application
```

## Prérequis

- Un navigateur moderne (Chrome, Firefox, etc.) pour visualiser le projet.
- Un éditeur de texte pour modifier les fichiers (ex : VSCode).

## Installation

1. Clonez ce repository sur votre machine :
   ```bash
   git clone https://github.com/votre-utilisateur/pizza-site.git
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur pour voir le site (lancé un server http à l'emplacement du fichier si rien n'est afficher).

## Fonctionnement

### Framework
Le mini-framework permet de :
- Créer des éléments HTML virtuels avec `createElement()`.
- Rendre ces éléments dans le DOM avec `renderApp()`.
