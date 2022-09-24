import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    host: true,
    open: true,
  },
  plugins: [
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
           * react-dev-inspector example configuration is as follows
           */
          '@react-dev-inspector/babel-plugin',
        ],
      },
    }),
  ],
})
