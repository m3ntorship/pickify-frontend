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
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/default-param-last': 'off',
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
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
