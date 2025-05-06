import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

const externals = [
  ...Object.keys(dependencies),
  ...Object.keys(devDependencies),
  'eslint/config',
]

export default defineConfig({
  externals,
  entries: [
    { input: './src/index.js' },
    { dts: './src/types.ts', output: './dist/index.d.mts' },
  ],
})
