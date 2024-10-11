import { Linter } from 'eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintParser from '@typescript-eslint/parser';

/** @type {Linter.Config} */
export default [
  {
    files: ['src/**/*.{ts,tsx}'], // Указываем файлы для линтинга
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
      }, 
    }, // Указываем парсер
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Путь к tsconfig
        },
      },
    },
    plugins: {
      import: eslintPluginImport, // Подключаем плагин import
      prettier: eslintPluginPrettier, // Подключаем плагин Prettier
      '@typescript-eslint': eslintPluginTypescript, // Подключаем плагин для TypeScript
    },
    rules: {
      'no-console': 'error',

      // Общие правила для импорта
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error',

      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Прочие правила для Prettier
      'prettier/prettier': ['error'], // Пример правила для Prettier
    },
  },

  // Конфигурация для тестов
  {
    files: ['**/*.test.ts', '**/*.spec.ts'], // Указываем шаблоны для тестов
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.test.json', // Путь к tsconfig для тестов
        },
      },
    },
    env: {
      jest: true, // Добавляем поддержку среды jest
    },
  },
];
