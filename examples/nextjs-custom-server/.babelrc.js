// https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  presets: [
    'next/babel',
  ],

  plugins: [
    /**
     * NOTE: the following `@react-dev-inspector/babel-plugin` is optional.
     *       It’s only for the online demo site,
     *       so you can remove it from your local development config.
     */
    '@react-dev-inspector/babel-plugin',
  ],
}
