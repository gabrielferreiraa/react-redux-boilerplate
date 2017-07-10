# Starter Kit CoreUI - React Redux 

###### When I thinked of using [CoreUI](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template) with React, I realized it's very simple for what I needed, so I've adapted it to ES6, Flux / Redux and Webpack 2 flow.

## This kit is using:

* Template [CoreUI](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template)
* Webpack 2
* Redux
* Babel
* React hot loader
* React Router
* HTML and CSS generated automatically by webpack
* Storybook
* Jest and Chai
* [Preact](https://preactjs.com/) for production build (optional)

## Up and running

- Clone this repository: `git clone git@github.com:gabrielferreiraa/starterKitReact.git`;
- Install dependencies: `yarn` or `yarn install`;
- Run `yarn dev` and access `http://localhost:3000`;
- Run `yarn build` for production build;

## Scripts

- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on `8888` port
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn build-storybook`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.