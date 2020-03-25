import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import atImport from 'postcss-import';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const extensions = [
  '.js', '.ts', '.vue'
];

export default {
  input: 'src/Logics.ts',
  output: {
    name: 'VueLogics',
    exports: 'default',
    globals: {
      'element-ui': 'ElementUI',
      'is-plain-object': 'isPlainObject',
      'vue': 'Vue',
    }
  },
  external: [
    'element-ui',
    'vue',
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    commonjs(),
    css({ output: 'dist/styles.css' }),
    vue({
      css: false,
      style: {
        postcssPlugins: [
          atImport()
        ]
      },
      compileTemplate: true,
      defaultLang: { script: 'ts' }
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    buble(),
    terser()
  ]
}
