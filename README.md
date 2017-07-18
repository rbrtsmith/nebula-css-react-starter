# Nebula-CSS & React + ES6 + Webpack Starter Project

* Starting point for a ReactJS project that consumes [Nebula-css](https://github.com/rbrtsmith/nebula-css)
* Minimal & easy to extend / customise to your own needs.
* Uses [babel-env](https://github.com/babel/babel-preset-env) preset and [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure targeted browsers are supported.
the default for this project is
  ```
  "last 2 versions", "ie 9-11"
  ```
These can be re-configured in your `.babelrc` and `webpack-config.babel` files.

## Get Started
1. fork / clone this repository
2. `npm install` OR `yarn`
3. `npm start` OR `yarn start` to start the Webpack Development Server
4. `npm run build` OR `yarn build` for production build

**Note** This is a very minimal starter pack, you are encouraged to add in your
own preferred unit testing framework, linting etc. If you are importing images or SVGs, custom fonts you
will require the appropriate Webpack-loaders.
