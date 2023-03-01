
const isProd = process.env.NODE_ENV === 'production'

// https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  presets: [
    'next/babel',
  ],

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
     * NOTE: the following `@react-dev-inspector/babel-plugin` is optional,
     *       only use for online demo site,
     *       you can remove it from your local development config.
     */
    '@react-dev-inspector/babel-plugin',
  ],
}
