# Welcome to the Web3data-Vue-Truffle-Starter pack!
Here you will find everything you need to get started with a Vue dApp!
Comes preconfigured with [`Webpack`](link), [`Truffle`](http://truffleframework.com), [`Vue.js`](https://vuejs.org/), [`vue-router`](https://router.vuejs.org/en/), [`Vuex`](https://vuex.vuejs.org/en/intro.html) and [`sass-loader`](https://github.com/webpack-contrib/sass-loader).

## Directory structure

```
/
|
+-- build/
|   |
|   +-- contracts/
|   |   |
|   |   + truffle compiled contracts
|
+-- config/
|   |
|   +-- eslint/
|   |   |
|   |   + estlint config files
|   |
|   +-- postcss/
|   |   |
|   |   + postcss config files
|   |
|   +-- vue-loader
|   |   |
|   |   + vue-loader config files
|   |   
|   +-- webpack/
|   |   |
|   |   + webpack config files
|   
+-- contracts/
|   |
|   + solidity contracts
|
+-- migrations/
|   |
|   + truffle migrations files
|
+-- scripts/
|   |
|   + webpack build scripts
|
+-- src/
|   |
|   + vue.js dapp files
|
+-- static/
|   |
|   + vue.js dapp static files
|
+-- test/
|   |
|   + truffle test files
```

## Installation
Clone repo:
  ```bash
  git clone https://github.com/web3data/vue-truffle-web3data-starter.git
  ```

Install [Truffle](http://truffleframework.com):
	```bash
	npm install -g truffle // Version 3.0.5+ required.
	```

Compile and migrate the contracts:
	```bash
	truffle compile
	truffle migrate
	```

Run the webpack server for front-end hot reloading:
  ```bash
  npm run dev
  ```

## Tests
  ```bash
  npm run test
  ```

## Build for production
To build the application for production, use the build command. A production build will be compiled in the `dist` folder.
```javascript
npm run build
```
