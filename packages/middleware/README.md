## `@react-dev-inspector/middleware`

<a href="https://www.npmjs.com/package/@react-dev-inspector/middleware" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/middleware" alt="NPM Version" /></a>

Dev-Server middleware for `react-dev-inspector`

Docs see: https://react-dev-inspector.zthxxx.me/docs/integration#inspector-middleware

This package mainly just provides a **`launchEditorMiddleware`**,
that is an [Express.js](https://github.com/expressjs/express) / [Connect.js](https://github.com/senchalabs/connect) **compatible** request middleware.


### Setup

```bash
npm i -D @react-dev-inspector/middleware
```

### Example in webpack

This package provides a **`launchEditorMiddleware`**,
just add it in your webpack config's middlewares.

> Note: Place `launchEditorMiddleware` as far forward in the middleware sequence as possible, before other middlewares.

For example, use with [`setupMiddlewares`](https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares) in **Webpack 5** likes:

```ts
const { launchEditorMiddleware } = require('@react-dev-inspector/middleware')

module.exports = {
  ...

  devServer: {
    setupMiddlewares(middlewares) {
      middlewares.unshift(launchEditorMiddleware)
      return middlewares
    },
  },
}
```

Use with [`devServer.before`](https://v4.webpack.js.org/configuration/dev-server/#devserverbefore) in **Webpack 4** likes:

```ts
const { launchEditorMiddleware } = require('@react-dev-inspector/middleware')

module.exports = {
  ...

  devServer: {
    before: (app, server, compiler) => {
      app.use(launchEditorMiddleware)
    },
  },
}
```
