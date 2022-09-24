// https://umijs.org/config/
import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  publicPath: '/umi4/',
  routes: [
    {
      path: '/',
      component: 'index.tsx',
    },
  ],

  plugins: [
    /**
     * react-dev-inspector example configuration is as follows
     */
    '@react-dev-inspector/umi4',
  ],
})
