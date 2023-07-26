import path from 'node:path'
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react-dev-inspector': path.resolve('src'),
      '@stories': path.resolve('src/.stories'),
    },
  },
  plugins: [
    /**
     * react-dev-inspector server config for vite
     */
    inspectorServer() as PluginOption,

    react({
      babel: {
        plugins: [
          ['@babel/plugin-syntax-decorators', { version: '2023-05' }],
          '@react-dev-inspector/babel-plugin',
        ],
      },
    }),
  ],
})
