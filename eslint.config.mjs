import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: ['node_modules', 'dist', 'build', '**/styled.ts'],
  },
  ...tseslint.config(
    {
      ...reactPlugin.configs.flat.recommended,
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      ...tseslint.configs.eslintRecommended,
      ignores: ['vite.config.*', '*.d.ts'],
      files: ['*.ts', '*.tsx'],
    },
    {
      ...tseslint.configs.base,
      files: ['*.ts', '*.tsx'],
    }
  ),
])
