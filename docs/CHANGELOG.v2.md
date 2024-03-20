# Changelog


## [2.1.0-beta.6](https://github.com/zthxxx/react-dev-inspector/compare/v2.0.1...v2.1.0-beta.6)

### Features

- add export `Overlay` (inspector indicating UI), support custom to get boxSizing and bounding
- add export fiber access utils

### Refactor

- refactor Inspector implementation to `DOMInspectAgent`, support setting custom `InspectAgent`
- rewrite Overlay to WebComponent with [LitElement](https://lit.dev)
- using `@floating-ui/core` for OverlayTip
- move `package.json` v1 compatible plugins from `dependencies` to `peerDependencies` with mark as optional
- add `exports` field into `package.json`


## [2.0.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.9.0...v2.0.1)

### Bug Fixes

- fix: fix utils `gotoVSCode` `gotoWebStorm` was not export as [documentation](https://react-dev-inspector.zthxxx.me/docs/inspector-component#oninspectelement) with its params.


## [2.0.0](https://github.com/zthxxx/react-dev-inspector/compare/v1.9.0...v2.0.0) (2023-09-04)

### Features

Refactor project with monorepo packages.

- Supports most frameworks without requiring the setting of additional Babel plugins, includes `vite4` `nextjs` `rspack`

Inspector Component:

- Add controlled mode for `Inspector` component,
  make it can controlled by props with `active` `onActiveChange`
  and could disable hotkeys by set `null` to `keys` props

- Change default keyboard shortcuts on Windows/Linux to `Ctrl + Shift + Alt + C`. <br/>
  (still keep `Ctrl + Shift + Command + C` as default on macOS)
- Add export of `defaultHotkeys` for your information.
- Add `onInspectElement` `disable` props, mark `disableLaunchEditor` as deprecated.
- Make automatically **disable** the `Inspector` component in **production** mode by default.
- The Umi3/Umi4 plugin no longer adds babel-plugin in **production** mode by default.

### Bug Fixes

- Fix missing cleanup during unmount phase in `useEffect` of `Inspector` component.


### Chore

- Remove import with `node-protocol` (`node:`) in packages, for more compatibility with lower Node.js versions.
- Add compatibility with some plugins path to `react-dev-inspector@v1`

### Breaking Changes

See breaking changes in [2.0.0-beta.1](#200-beta1-2023-07-06)


---


## [2.0.0-beta.3](https://github.com/zthxxx/react-dev-inspector/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-09-03)

### Chore

- Remove import with `node-protocol` (`node:`) in packages, for more compatibility with lower Node.js versions.
- Add compatibility with some plugins path to `react-dev-inspector@v1`, includes:
  - partial of `react-dev-inspector/plugins/webpack`
  - `react-dev-inspector/plugins/babel`
  - `react-dev-inspector/plugins/vite`
  - `react-dev-inspector/plugins/umi`
  - `react-dev-inspector/plugins/ice`


## [2.0.0-beta.2](https://github.com/zthxxx/react-dev-inspector/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-09-03)

### Features

Inspector Component:

- Change default keyboard shortcuts on Windows/Linux to `Ctrl + Shift + Alt + C`. <br/>
  (still keep `Ctrl + Shift + Command + C` as default on macOS)
- Add export of `defaultHotkeys` for your information.
- Add `onInspectElement` `disable` props, mark `disableLaunchEditor` as deprecated.
- Make automatically **disable** the `Inspector` component in **production** mode by default.
- The Umi3/Umi4 plugin no longer adds babel-plugin in **production** mode by default.

### Bug Fixes

- Fix missing cleanup during unmount phase in `useEffect` of `Inspector` component.


## [2.0.0-beta.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.9.0...v2.0.0-beta.1) (2023-07-06)

### Features

- Supports most frameworks without requiring the setting of additional Babel plugins, includes `vite4` `nextjs` `rspack`
- Add controlled mode for `Inspector` component,
  make it can controlled by props with `active` `onActiveChange`
  and could disable hotkeys by set `null` to `keys` props

### Breaking Changes

Migration from v1.x to v2.x:

**Replaced Imports:**

- `import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack'` <br/>
  -> `import { launchEditorMiddleware } from '@react-dev-inspector/middleware'`

- `import { inspectorServer } from 'react-dev-inspector/plugins/vite'` <br/>
  -> `import { inspectorServer } from '@react-dev-inspector/vite-plugin'`

**Replaced references path:**

- `'react-dev-inspector/plugins/babel'` -> `'@react-dev-inspector/babel-plugin'`

- `'react-dev-inspector/plugins/umi/react-inspector'`
  - -> `'@react-dev-inspector/umi3-plugin'`
  - -> `'@react-dev-inspector/umi4-plugin'`


**Deprecated and Removed:**

- the babel plugin and middleware in package `react-dev-inspector/plugins/webpack` was splited to two packages:
  - `@react-dev-inspector/babel-plugin`
  - `@react-dev-inspector/middleware`

- `import type { InspectorConfig } from 'react-dev-inspector/plugins/webpack'`
  - the babel plugin config type changed to <br/>
    `import type { InspectorBabelPlugin } from '@react-dev-inspector/babel-plugin'`

- `import { ReactInspectorPlugin } from 'react-dev-inspector/plugins/webpack'`
  - the dev server middleware changed to `launchEditorMiddleware`, <br/>
    `import { launchEditorMiddleware } from '@react-dev-inspector/middleware'`
