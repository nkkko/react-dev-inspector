// https://umijs.org/config/
import path, { resolve } from 'path'
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
      require.resolve('@emotion/babel-plugin'),
      {
        sourceMap: true,
        autoLabel: 'always',
        labelFormat: '[local]',
      },
    ],
  ],
  extraBabelIncludes: [
    // for support `?.` (optional-chaining) and `??` (nullish-coalescing-operator) in umi3 webpack4
    'react-dev-inspector',
    path.join(__dirname, '../../packages/'),
  ],
  alias: {
    // for support package.json `exports` field in umi3 webpack4
    '@kobalte/core': '@kobalte/core/dist',
  },

  plugins: [
    /**
     * react-dev-inspector example configuration is as follows
     */
    '@react-dev-inspector/umi3-plugin',
  ],
})
