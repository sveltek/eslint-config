import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  externals: [
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
    'eslint/config',
  ],
  entries: [
    { input: './src/index.js' },
    { dts: './src/types.ts', output: './dist/index.d.ts' },
  ],
})
