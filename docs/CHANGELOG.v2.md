# Changelog


## [2.0.0-beta.2](https://github.com/zthxxx/react-dev-inspector/compare/v2.0.0-beta.1...v2.0.0-beta.2)

### Feat

Inspector Component:

- Change default keyboard shortcuts on Windows/Linux to `Ctrl + Shift + Alt + C`. <br/>
  (still keep `Ctrl + Shift + Command + C` as default on macOS)
- Add export of `defaultHotkeys` for your information.
- Add `onInspectElement` `disable` props, mark `disableLaunchEditor` as deprecated.
- Make automatically **disable** the `Inspector` component in **production** mode by default.
- The Umi3/Umi4 plugin no longer adds babel-plugin in **production** mode by default.

### Fix

- Fix missing cleanup during unmount phase in `useEffect` of `Inspector` component.


## [2.0.0-beta.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.9.0...v2.0.0-beta.1) (2023-07-06)

### Feat

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
