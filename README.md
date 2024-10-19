# Angular Web User Interface 🎨

[![pages-build-deployment](https://github.com/louiiuol/ngx-lib/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/louiiuol/ngx-lib/actions/workflows/pages/pages-build-deployment)

Tired of having to fight with frameworks behavior ? Want to regain control of your UI without having to overrides all components. This project help you create your own component without any extras dependencies. Ok, actually you are going to need 3:

- Angular (can't do much without it)
- Tailwind (helps simplify harmonious UI)
- Angular cdk (a lot of handful tools there)

If you are ok with using thoses dependencies, this project is made for you ! This is not a framework, nor a cdk, but simply a collection of components following best practices in angular web development.

> **note**
> This repository was created as a model for creating actual application. Feel free to use take any components you want 🙌

## Built with 🏗️

### Core

> If you want to use components in this repository, make sure you have thoses dependencies with compatibles versions.

| Dependency | version |
|:-----------|:----------|
| [@angular/core](https://angular.io/guide/what-is-angular) | `^18.2.0` |
| [rxjs](https://rxjs.dev/api) | `~7.8.0` |
| [typescript](https://www.typescriptlang.org/) | `~5.5.2` |
| [tailwind](https://tailwindcss.com/docs/screens) | `^3.4.13` |

### Optional

> Those dependencies were used to create this repository but are not mandatory for yours.

| Dependency | version |
|:-----------|:----------|
| [eslint](https://eslint.org/docs/latest/) | `8.57.0` |
| [ngdoc](https://ng-doc.com/) | `18.2.0` |

> More dependencies can be found inside [package.json](https://github.com/louiiuol/ngx-lib/blob/main/package.json).

## Get Started 🚀

To discover what's inside this repository, i recommend going to the [documentation page](https://louiiuol.github.io/ngx-lib/). From there, look for the sidebar which all components, services, pipes, and guides (soon).

All classes are also referenced on the [API documentation](https://louiiuol.github.io/ngx-lib/api)

### NPM scripts
> This project contains multiple scripts. Remember to first run `npm i` in order to load required dependencies. Then you can run any of the scripts below:

| Script | Description |
|:-----------|:----------|
| `npm run start` | Serves application locally to <https://localhost:4200> |
| `npm run build` | Builds application in production mode to `dist/ngx-lib/browser` |
| `npm run watch` | Builds application in development mode and watch for file change |
| `npm run lint` | Lint repository with eslint & prettier. |

## Versions 🔖

> A complete changelog can be found in [dedicated markdown](https://louiiuol.github.io/ngx-lib/versions/changelog). Which resume current progress. You can also found what is in the current development inside [TODO](https://louiiuol.github.io/ngx-lib/versions/todo) markdown.
