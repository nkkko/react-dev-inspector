const {
  override,
  overrideDevServer,
  addBabelPlugin,
  addWebpackModuleRule,
} = require('customize-cra')
const { launchEditorMiddleware } = require('@react-dev-inspector/middleware')


const removeWebpackPlugin = (pluginName) => (config) => {
  const pluginIndex = config.plugins.findIndex((plugin) => plugin.constructor.name === pluginName)

  if (pluginIndex > -1) {
    config.plugins.splice(pluginIndex, 1)
  }

  return config
}


/**
 * origin config:
 *   https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-scripts/config/webpack.config.js
 *   https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-scripts/config/webpackDevServer.config.js
 *
 * customize-cra api code: https://github.com/arackaf/customize-cra
 */
module.exports = {
  /**
   * react-dev-inspector server config for webpack-dev-server
   */
  devServer: overrideDevServer(
    serverConfig => {
      // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares
      serverConfig.setupMiddlewares = (middlewares) => {
        middlewares.unshift(launchEditorMiddleware)
        return middlewares
      }

      return serverConfig
    },
  ),

  webpack: override(
    removeWebpackPlugin('ForkTsCheckerWebpackPlugin'),
    addWebpackModuleRule({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
            },
          },
        },
      ],
    }),

    /** react-dev-inspector - babel config */
    addBabelPlugin([
      // plugin options docs see:
      // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
      '@react-dev-inspector/babel-plugin',
    ]),
  ),
}
