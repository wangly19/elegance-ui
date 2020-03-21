module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'padded-blocks': 0,
    'space-before-function-paren': 0,
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'prefer-promise-reject-errors': 0,
    'import/no-duplicates': 0,
    'vue/valid-v-for': 0,
    'eol-last': 0,
    'no-unused-vars': 0
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
