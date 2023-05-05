
const isProd = process.env.NODE_ENV === 'production'

// https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  presets: [
    'next/babel',
  ],

  plugins: [
    /**
     * NOTE: the following `@react-dev-inspector/babel-plugin` is optional,
     *       only use for online demo site,
     *       you can remove it from your local development config.
     */
    ...(isProd ? ['@react-dev-inspector/babel-plugin'] : []),
  ],
}
