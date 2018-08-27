module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['warn'],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'no-console': 0
  }
}

/**
 * eslint Rules
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */
