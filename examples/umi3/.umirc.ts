// https://umijs.org/config/
import { defineConfig } from 'umi'


export default defineConfig({
  hash: true,
  publicPath: '/umi3/',
  routes: [
    {
      path: '/',
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
    '@react-dev-inspector/umi3',
  ],
})
