// https://umijs.org/config/
import { defineConfig } from 'umi'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


const isDev = process.env.NODE_ENV === 'development'
const publicPath = isDev ? '/' : '/umi4/'

export default defineConfig({
  hash: true,
  publicPath,
  routes: [
    {
      path: publicPath,
      component: 'index.tsx',
    },
  ],
  extraPostCSSPlugins: [
    tailwindcss,
    autoprefixer,
  ],
  plugins: [
    /**
     * react-dev-inspector example configuration is as follows
     */
    '@react-dev-inspector/umi4-plugin',
  ],
})
