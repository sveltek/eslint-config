import globals from 'globals'
import jsPlugin from '@eslint/js'

/** @type {import("eslint").Linter.Config} */
export const jsConfig = {
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
    },
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
}
