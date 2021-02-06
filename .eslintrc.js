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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-irregular-whitespace': 'warn',
    camelcase: 'error',
    'comma-spacing': 'error',
    'arrow-spacing': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
  },
  settings: { react: { version: 'detect' } },

  // typescript-related configs overrides
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
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
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
