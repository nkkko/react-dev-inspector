import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


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
           * NOTE: the following `@react-dev-inspector/babel-plugin` is optional.
           *       It’s only for the online demo site,
           *       so you can remove it from your local development config.
           */
          '@react-dev-inspector/babel-plugin',
        ],
      },
    }),
  ],
})
