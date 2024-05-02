## `@react-dev-inspector/umi4-plugin`

<a href="https://www.npmjs.com/package/@react-dev-inspector/umi4-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/umi4-plugin" alt="NPM Version" /></a>

[`Umi4`](https://umijs.org) plugin for [`react-dev-inspector`](https://react-dev-inspector.zthxxx.me)

Docs see: https://react-dev-inspector.zthxxx.me/docs/integration/umijs


### Setup

At first install the plugin package:

```bash
npm i -D @react-dev-inspector/umi4-plugin
```

Then add the plugin to your UmiJS config file and that's all done, likes `.umirc.dev.ts`:

```ts
// https://umijs.org/docs/api/config
import { defineConfig } from 'umi'

export default defineConfig({
  ...

  plugins: [
    ...

    '@react-dev-inspector/umi4-plugin',
  ],
})
```


> The plugin includes [`@react-dev-inspector/babel-plugin`](/docs/compiler-plugin#react-dev-inspectorbabel-plugin),
> which will automatically be **disabled** when using **`srcTranspiler: 'swc'`** in umi4 config or when in **production** build mode.


[![Open in StackBlitz](https://raw.githubusercontent.com/zthxxx/react-dev-inspector/dev/docs/components/stack-blitz/open-in-stackblitz.svg)](https://stackblitz.com/github/zthxxx/react-dev-inspector/tree/dev/examples/umi4)
