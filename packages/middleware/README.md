## `@react-dev-inspector/middleware`

<a href="https://www.npmjs.com/package/@react-dev-inspector/middleware" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/middleware" alt="NPM Version" /></a>

Dev-Server middleware for `react-dev-inspector`

Docs see: https://react-dev-inspector.zthxxx.me/docs/integration#inspector-middleware

This package mainly just provides a **`launchEditorMiddleware`**,
that is an [Express.js](https://github.com/expressjs/express) / [Connect.js](https://github.com/senchalabs/connect) **compatible** request middleware.

```bash
npm i -D @react-dev-inspector/middleware
```

```ts
import { launchEditorMiddleware } from '@react-dev-inspector/middleware'
```
