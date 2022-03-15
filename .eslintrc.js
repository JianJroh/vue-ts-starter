module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // // Specifies the ESLint parser
    sourceType: 'module', // Allows for the use of imports
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    /** off **/
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/require-default-prop': 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/multi-word-component-names': 'off', //
    'no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    /** warn **/
    'vue/script-setup-uses-vars': 'warn',
    /** error **/
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
  },
};
