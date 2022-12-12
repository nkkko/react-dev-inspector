// https://umijs.org/config/
import { defineConfig } from 'umi'

const isDev = process.env.NODE_ENV === 'development'
const publicPath = isDev ? '/' : '/umi3/'

export default defineConfig({
  hash: true,
  publicPath,
  routes: [
    {
      path: publicPath,
      component: 'index.tsx',
    },
  ],
  ignoreMomentLocale: true,
  targets: {
    chrome: 80,
  },
  extraBabelPlugins: [
    [
      // https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#options
      '@emotion/babel-plugin',
      {
        sourceMap: true,
        autoLabel: 'always',
        labelFormat: '[local]',
      },
    ],
  ],

  plugins: [
    /**
     * react-dev-inspector example configuration is as follows
     */
    '@react-dev-inspector/umi3-plugin',
  ],
})
