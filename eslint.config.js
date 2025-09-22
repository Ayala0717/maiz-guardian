import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  importPlugin.flatConfigs.recommended,
  prettierPluginRecommended,
  ...pluginVue.configs['flat/recommended'],
  globalIgnores([
    'node_modules',
    'dist',
    'eslint.config.js',
    'pnpm-lock.yaml',
    './src/assets',
  ]),
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },

    rules: {
      // common
      'semi': ['error', 'never'],
      'curly': ['error', 'multi-or-nest', 'consistent'],
      'quotes': ['error', 'single'],
      'quote-props': ['error', 'consistent-as-needed'],
      'no-unused-vars': 'off',
      'no-param-reassign': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-constant-condition': 'warn',
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-cond-assign': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'object-curly-spacing': ['error', 'always'],
      // es6
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'generator-star-spacing': 'off',
      // best-practice
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'off',
      'complexity': ['off', 11],
      'eqeqeq': ['error', 'allow-null'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-escape': 'off',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-return-assign': 'off',
      'operator-linebreak': 'off',
      // TS
      'no-useless-constructor': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // import
      'import/order': 'error',
      'import/first': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      // unicorns
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/number-literal-case': 'error',
      '@/prefer-exponentiation-operator': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
          },
          ignore: [/\w*.vue/],
        },
      ],
      //vue
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 5,
          },
          multiline: {
            max: 5,
          },
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      'no-use-before-define': 'off',
      'vue/require-valid-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
])
