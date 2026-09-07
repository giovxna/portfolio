import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // o projeto não usa PropTypes; a tipagem fica a cargo do uso
      'react/prop-types': 'off',
    },
  },
  {
    // os arquivos de ui exportam também a versão animada (motion(Componente)),
    // que o plugin não reconhece como componente e acusa falso-positivo
    files: ['src/components/ui/*.jsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
  // desliga as regras de estilo que o Prettier já resolve
  prettier,
]
