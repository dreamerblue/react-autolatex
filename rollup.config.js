import path from 'path';
import fs from 'fs';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import license from 'rollup-plugin-license';
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'AutoLaTeX',
      globals: {
        react: 'React',
        'katex/dist/contrib/auto-render': 'renderMathInElement',
        'lodash.isequal': 'isEqual',
      },
    },
  ],
  external: ['react', 'katex/dist/contrib/auto-render', 'lodash.isequal'],
  plugins: [
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      tsconfigOverride: {
        exclude: [
          "node_modules",
          "dist",
          "**/__tests__",
        ],
      },
    }),
    commonjs(),
    license({
      banner: `<%= pkg.name %>
Author: <%= pkg.author %>
Generated: <%= moment().format('YYYY-MM-DD') %>
Version: <%= pkg.version %>

${fs.readFileSync(path.join(__dirname, 'LICENSE'))}`,
    }),
  ]
}
