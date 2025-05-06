<h1 align="center">@sveltek/eslint-config</h1>

<p align="center">Sveltek's config for ESLint.</p>

<br>

## Installation

```sh
pnpm add -D @sveltek/eslint-config
```

## Usage

### Linting Commands

Add lint commands for manual linting (optional):

```js
// package.json

{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

### JavaScript Config

```js
// eslint.config.js

import { defineConfig, jsConfig, ignoresConfig } from '@sveltek/eslint-config'

export default defineConfig([jsConfig, ignoresConfig])
```

### TypeScript Config

```js
// eslint.config.js

import {
  defineConfig,
  jsConfig,
  tsConfig,
  ignoresConfig,
} from '@sveltek/eslint-config'

export default defineConfig([jsConfig, tsConfig, ignoresConfig])
```

### Svelte/SvelteKit Config

> [!NOTE]
>
> Also, don't forget to add the `svelte` lang key to the `eslint.validate` vscode setting:
>
> ```js
> // .vscode/settings.json
>
> {
>   "eslint.validate": ["javascript", "typescript", "svelte"]
> }
> ```

```js
// eslint.config.js

import {
  defineConfig,
  jsConfig,
  tsConfig,
  svelteConfig,
  ignoresConfig,
} from '@sveltek/eslint-config'

export default defineConfig([jsConfig, tsConfig, svelteConfig, ignoresConfig])
```

## Custom Setup

```js
// eslint.config.js

import {
  defineConfig,
  globalIgnores,
  jsConfig,
  tsConfig,
  ignores,
} from '@sveltek/eslint-config'

export default defineConfig([
  jsConfig,
  tsConfig,
  svelteConfig,
  {
    files: jsConfig.files,
    rules: {
      // ...
    },
  },
  {
    files: tsConfig.files,
    rules: {
      // ...
    },
  },
  {
    files: svelteConfig.files,
    rules: {
      // ...
    }
  }
  globalIgnores([...ignores, '**/dir/']),
])
```

For more info on how to `ignore files`, see the official [docs](https://eslint.org/docs/latest/use/configure/ignore).

## Community

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/sveltek/eslint-config/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Sveltek.

Released under the [MIT](LICENSE.txt) license.
