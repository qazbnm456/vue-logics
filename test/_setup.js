// Set up JSDom.
require('jsdom-global')();

// Fix the Date object, see <https://github.com/vuejs/vue-test-utils/issues/936#issuecomment-415386167>.
window.Date = Date;
window.VueLogicsTest = true;

// Setup browser environment
const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip & devtools tip
Vue.config.productionTip = false;
Vue.config.devtools = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
hooks(['js', 'ts']).exclude(({filename}) => filename.match(/\/node_modules\//)).plugin('babel', {
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ],
  presets: [
    "@babel/preset-env",
    // https://github.com/pawelgabryelewicz/babel-preset-typescript-vue#why
    "babel-preset-typescript-vue"
  ]
}).push();
