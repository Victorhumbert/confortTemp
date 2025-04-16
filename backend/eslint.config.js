import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules', 'dist'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module', // ou 'script' se não estiver usando import/export
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off', // libera o uso de console.log()
      'eqeqeq': 'error',   // força o uso de ===
      'curly': 'error'     // força uso de chaves em blocos if/else
    },
  }
];
