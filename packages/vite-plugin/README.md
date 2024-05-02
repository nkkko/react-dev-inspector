## `@react-dev-inspector/vite-plugin`

<a href="https://www.npmjs.com/package/@react-dev-inspector/vite-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/vite-plugin" alt="NPM Version" /></a>

[`Vite`](https://vitejs.dev) plugin for [`react-dev-inspector`](https://react-dev-inspector.zthxxx.me)


Docs see: https://react-dev-inspector.zthxxx.me/docs/integration/vite


### Setup

At first install the plugin package:

```bash
npm i -D @react-dev-inspector/vite-plugin
```

The `@react-dev-inspector/vite-plugin` only register a `inspectorServer` for middleware to launch the local editor with an endpoint using [`@react-dev-inspector/middleware`](https://react-dev-inspector.zthxxx.me/docs/integration#inspector-middleware),
that compatible with `vite@5` / `vite@4` / `vite@3` / `vite@2`.

Just add it into `vite.config.ts` and that's all done.


```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  ...

  plugins: [
    react(),

    /**
     * react-dev-inspector server config for vite
     */
    inspectorServer(),
  ],
})
```

### Example

Example project code you can find in [examples/vite4](https://github.com/zthxxx/react-dev-inspector/blob/dev/examples/vite4/vite.config.ts),
or see online demo via:

[![Open in StackBlitz](https://raw.githubusercontent.com/zthxxx/react-dev-inspector/dev/docs/components/stack-blitz/open-in-stackblitz.svg)](https://stackblitz.com/github/zthxxx/react-dev-inspector/tree/dev/examples/vite4)
