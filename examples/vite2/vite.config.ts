import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

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
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
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
          /**
           * NOTE: the following `@react-dev-inspector/babel-plugin` is optional,
           *       only use for online demo site,
           *       you can remove it from your local development config.
           */
          ...(isProd ? ['@react-dev-inspector/babel-plugin'] : []),
        ],
      },
    }),
  ],
})
