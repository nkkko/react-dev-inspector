import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    host: true,
    open: true,
  },
  plugins: [
    /**
     * react-dev-inspector server config for vite
     */
    inspectorServer() as PluginOption,

    react({
      babel: {
        plugins: [
          /**
           * NOTE: the following `@react-dev-inspector/babel-plugin` is optional,
           *       only use for online demo site,
           *       you can remove it from your local development config.
           */
          '@react-dev-inspector/babel-plugin',
        ],
      },
    }),
  ],
})
