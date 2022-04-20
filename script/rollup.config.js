import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import multiInput from 'rollup-plugin-multi-input';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';

import pkg from '../package.json';

const { name, version, author, license, dependencies, peerDependencies } = pkg;

const externalDeps = Object.keys(dependencies || {});
const externalPeerDeps = Object.keys(peerDependencies || {});

const banner = `/**
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author.name}
* @license ${license}
*/
`;

const multiInputList = ['src/**/*.ts', 'src/**/**/*.tsx', 'src/styles/index.scss'];

const cssOutput = 'build/styles/index.css';

const getCommonPlugins = () => {
  const plugins = [
    nodeResolve(),
    commonjs(),
    scss({
      output: cssOutput,
      outputStyle: 'compressed',
    }),
    typescript({
      exclude: ['example'],
    }),
  ];

  return plugins;
};

const esmConfig = {
  input: multiInputList,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [multiInput(), ...getCommonPlugins()],
  output: {
    banner,
    dir: 'build/esm/',
    format: 'esm',
  },
};

const cjsConfig = {
  input: multiInputList,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [multiInput(), ...getCommonPlugins()],
  output: {
    banner,
    dir: 'build/cjs/',
    format: 'cjs',
  },
};

export default [esmConfig, cjsConfig];
