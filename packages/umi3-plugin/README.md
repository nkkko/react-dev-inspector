## `@react-dev-inspector/umi3-plugin`

<a href="https://www.npmjs.com/package/@react-dev-inspector/umi3-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/umi3-plugin" alt="NPM Version" /></a>


[`Umi3`](https://v3.umijs.org) plugin for [`react-dev-inspector`](https://react-dev-inspector.zthxxx.me)

Docs see: https://react-dev-inspector.zthxxx.me/docs/integration/umijs


### Setup

```bash
npm i -D @react-dev-inspector/umi3-plugin
```

Then add the plugin to your UmiJS config file and that's all done, likes `.umirc.dev.ts`:

```ts
// https://v3.umijs.org/config
import { defineConfig } from 'umi'

export default defineConfig({
  ...

  plugins: [
    ...

    '@react-dev-inspector/umi3-plugin',
  ],
})
```


> This plugin has include a [`@react-dev-inspector/babel-plugin`](/docs/compiler-plugin#react-dev-inspectorbabel-plugin)
> which will automatically disable when production build mode.

[![Open in StackBlitz](https://raw.githubusercontent.com/zthxxx/react-dev-inspector/dev/docs/components/stack-blitz/open-in-stackblitz.svg)](https://stackblitz.com/github/zthxxx/react-dev-inspector/tree/dev/examples/umi3)
