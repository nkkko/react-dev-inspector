// https://umijs.org/docs/api/config
import { defineConfig } from 'umi'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


const isDev = process.env.NODE_ENV === 'development'
const isStackBlitz = process.env.SHELL === '/bin/jsh'
const publicPath = isDev ? '/' : '/umi4/'

export default defineConfig({
  // umi4 config of SWC not available in StackBlitz WebContainers
  srcTranspiler: (isDev && !isStackBlitz) ? 'swc' : 'babel',

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
