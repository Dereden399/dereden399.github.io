const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const parser = require("vue-eslint-parser");
const vue = require("eslint-plugin-vue");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },

    extends: compat.extends("eslint:recommended", "plugin:vue/vue3-recommended", "prettier"),

    plugins: {
        vue,
    },

    rules: {
        "vue/no-v-html": "off",
        "vue/multi-word-component-names": "off",
    },
}]);