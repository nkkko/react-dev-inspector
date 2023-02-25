import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    host: true,
    open: true,
  },

  optimizeDeps: {
    // https://github.com/vitejs/vite/issues/6215
    include: ['react/jsx-runtime'],
  },
  plugins: [
    /**
     * react-dev-inspector server config for vite
     */
    inspectorServer() as PluginOption,

    react({
      babel: {
        plugins: [
          [
            // https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#options
            '@emotion/babel-plugin',
            {
              sourceMap: true,
              autoLabel: 'always',
              labelFormat: '[local]',
            },
          ],

          /**
           * NOTE: the following `@react-dev-inspector/babel-plugin` is optional,
           *       only use for online demo
           */
          ...(isProd ? ['@react-dev-inspector/babel-plugin'] : []),
        ],
      },
    }),
  ],
})
