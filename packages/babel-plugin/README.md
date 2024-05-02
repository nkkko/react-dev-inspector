## `@react-dev-inspector/babel-plugin`

<a href="https://www.npmjs.com/package/@react-dev-inspector/babel-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/@react-dev-inspector/babel-plugin" alt="NPM Version" /></a>

Babel plugin for [`react-dev-inspector`](https://www.npmjs.com/package/react-dev-inspector)

Docs see: https://react-dev-inspector.zthxxx.me/docs/compiler-plugin

> [!NOTE]
> Note that this section is generally **OPTIONAL**.
> Most React frameworks offer this feature **_out-of-the-box_**,
> which means you usually **don't** need to manually configure it additionally.
>
> See about same effect in [`@babel/preset-react`](https://react-dev-inspector.zthxxx.me/docs/compiler-plugin#babelpreset-react) / [`SWC`](https://react-dev-inspector.zthxxx.me/docs/compiler-plugin#swc) / [`esbuild`](https://react-dev-inspector.zthxxx.me/docs/compiler-plugin#esbuild)


```bash
npm i -D @react-dev-inspector/babel-plugin
```

`@react-dev-inspector/babel-plugin` could inject some custom data attributes start with `data-inspector-`,
which will eventually appear on the DOM element.


```tsx
// Input
<div />

// Output
<div data-inspector-relative-path="src/path/Component.tsx" data-inspector-line="10" data-inspector-column="6" />
```
