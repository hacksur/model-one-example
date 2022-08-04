import { build } from 'esbuild'
import NodeModulesPolyfill from '@esbuild-plugins/node-modules-polyfill'
import NodeGlobalsPolyfill from '@esbuild-plugins/node-globals-polyfill'
const { NodeModulesPolyfillPlugin } = NodeModulesPolyfill
const { NodeGlobalsPolyfillPlugin } = NodeGlobalsPolyfill

build({
  bundle: true,
  format: 'esm',
  mainFields: ['browser', 'module', 'main'],
  platform: 'node',
  target: 'es2020',
  entryPoints: ['./src/index.ts'],
  outfile: './dist/worker.mjs',
  sourcemap: false,
  charset: 'utf8',
  plugins: [ NodeModulesPolyfillPlugin(), NodeGlobalsPolyfillPlugin({ buffer: true }) ],
  minify: process.env.NODE_ENV === 'production' ? true : false,
}).catch((err) => {
  console.error(err.stack)
  process.exitCode = 1
})
