// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors


const isMinify = !process.env.DISABLE_BUILD_MINIFY

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: isMinify && {},
  },
}
