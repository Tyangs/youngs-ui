import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const { name, description, version, author, license } = pkg;

const banner = `/**
* ${name} v${version}
* ${description}
* (c) ${new Date().getFullYear()} ${author.name}
* @license ${license}
*/
`;

export default {
  input: './index.ts',
  output: [
    {
      banner,
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      banner,
      file: 'dist/index.umd.js',
      name: 'index.umd',
      format: 'umd',
      plugins: [terser()],
    },
  ],
  plugins: [commonjs(), typescript()],
};
