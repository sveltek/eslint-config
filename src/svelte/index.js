import globals from 'globals'
import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

/** @type {import("eslint").Linter.Config} */
export const svelteConfig = {
  files: ['**/*.svelte'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: svelteParser,
    parserOptions: {
      parser: tsParser,
    },
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
    },
  },
  plugins: {
    svelte: sveltePlugin,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    ...sveltePlugin.configs.recommended.at(-1).rules,
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
  },
}
