import {
  defineConfig,
  jsConfig,
  tsConfig,
  svelteConfig,
  ignoresConfig,
} from './src/index.js'

export default defineConfig([jsConfig, tsConfig, svelteConfig, ignoresConfig])
