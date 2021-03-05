module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    indent: 0, // handled by prettier
    'arrow-body-style': 0, // handled by prettier
    'operator-linebreak': 0, // handled by prettier
    'implicit-arrow-linebreak': 0, // handled by prettier
    'max-len': [1, { code: 120, tabWidth: 2, ignoreTemplateLiterals: true, ignoreStrings: true }], // handled by prettier
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.tsx'] }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
    'class-methods-use-this': 0,
    'object-curly-newline': [
      // handled by prettier
      1,
      {
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 20 },
      },
    ],
    'no-param-reassign': 0,
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/require-default-props': [0],
    'react/react-in-jsx-scope': 'off',
    semi: [1, 'never', { beforeStatementContinuationChars: 'always' }],
    quotes: [1, 'single', { avoidEscape: true }],
  },
}
