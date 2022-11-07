import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: 'eslint-config-standard-with-typescript',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'semi' }
        }]
      }
    }
  ]

};

export = config;
