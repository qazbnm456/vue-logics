---
tags:
  - installation
  - npm
  - yarn
  - cdn
  - configuration
  - use
---

# Installation

The preferred way to use Vue Logics is to install via your favorite JavaScript package manager.

## NPM

```sh
npm install vue-logics
```

## Yarn

```sh
yarn add vue-logics
```

## Direct download

Alternatively, if your project doesn't have a build process, you can download the repository and manually link to the minified version:

```html
<!-- import the styles -->
<link rel="stylesheet" href="/vue-logics/dist/styles.css">
<!-- import the library -->
<script src="/vue-logics/dist/logics.min.js"></script>
```

:::tip Note
Due to DOM limitations, when mounting Vue Logics in DOM templates (outside of single-file components) all the component names will need to be [lower-cased, hyphen separated and with a closing tag](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended).

`<VueLogics />` ⭢ `<vue-logics></vue-logics>`
:::

## CDN

Similar to a direct download, you can load Vue Logics directly off of a CDN like [JSDeliver](https://www.jsdelivr.com/package/npm/vue-logics?path=dist).

## Add to Vue

Once Vue Logics has been downloaded you need to install it with Vue.

```js
import Vue from 'vue';
// import the library
import VueLogics from 'vue-logics';
// import the styles
import '~/node_modules/vue-logics/dist/styles.css';

Vue.use(VueLogics);
```

::: warning
When loading Vue Logics from the minified version or using a commonJS module environment (think `require()`) it may be necessary to use `VueLogics.default` when registering with Vue:

```js
const VueLogics = require('vue-logics');

Vue.use(VueLogics.default);
```
:::

## Configuration options

If you need custom configuration options, you can pass a second argument with an object of configuration options.

```js
Vue.use(VueLogics, options);
```

## IE11 Support

While Internet Explorer 11 is supported polyfills for ES2015 language features are not included in Vue Logics. For those who do require IE11 support we recommend using [polyfill.io](https://polyfill.io/v3/) or similar service to shim ES2015 features.

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es2015"></script>
```
