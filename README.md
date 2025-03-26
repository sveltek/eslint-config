<h1 align="center">@sveltek/eslint-config</h1>

<p align="center">Sveltek's config for ESLint.</p>

<br>

## Installation

```sh
pnpm add -D @sveltek/eslint-config
```

## Setup

Add `lint` commands for manual linting (optional):

#### package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

## Usage

### JS

```js
// eslint.config.js

import { jsConfig, ignoresConfig } from '@sveltek/eslint-config'

export default [jsConfig, ignoresConfig]
```

### TS

```js
// eslint.config.js

import { jsConfig, tsConfig, ignoresConfig } from '@sveltek/eslint-config'

export default [jsConfig, tsConfig, ignoresConfig]
```

### Svelte/SvelteKit

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
  jsConfig,
  tsConfig,
  svelteConfig,
  ignoresConfig,
} from '@sveltek/eslint-config'

export default [jsConfig, tsConfig, svelteConfig, ignoresConfig]
```

## Customization

#### eslint.config.js

```js
import {
  jsConfig,
  tsConfig,
  svelteConfig,
  ignores,
} from '@sveltek/eslint-config'

export default [
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
  {
    ignores: [...ignores, '**/dir/**/*'],
  },
]
```

## Community

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/sveltek/eslint-config/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Sveltek.

Released under the [MIT](LICENSE.txt) license.
