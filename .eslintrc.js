module.exports = {
  // javascript
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,

    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-irregular-whitespace': 'warn',
    camelcase: 'error',
    'comma-spacing': 'error',
    'arrow-spacing': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'import/no-extraneous-dependencies': 0,
  },
  settings: { react: { version: 'detect' } },

  // typescript-related configs overrides
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
      extends: [
        'plugin:@typescript-eslint/all',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'react/prop-types': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/default-param-last': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'function',
            format: ['PascalCase'],
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
