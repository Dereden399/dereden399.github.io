const globals = require('globals')
const parser = require('vue-eslint-parser')
const vue = require('eslint-plugin-vue')
const js = require('@eslint/js')
const prettier = require('eslint-plugin-prettier/recommended')

module.exports = [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: parser,

      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },

    rules: {
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
]
