module.exports = {
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 13, sourceType: 'module' },
  rules: {
    // aquí puedes personalizar reglas
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
