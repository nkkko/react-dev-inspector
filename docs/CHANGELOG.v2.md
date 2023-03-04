# Changelog


## [2.0.0-beta.1](https://github.com/zthxxx/react-dev-inspector/compare/v1.8.6...v2.0.0-beta.1) (2023-07-06)

### Feat

- Supports most frameworks without requiring the setting of additional Babel plugins, includes `vite4` `nextjs` `rspack`
- Add controlled mode for `Inspector` component,
  make it can controlled by props with `active` `onActiveChange`
  and could disable hotkeys by set `null` to `keys` props

### Breaking Changes

Migration from v1.x to v2.x:

- `import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack'`
  -> `import { launchEditorMiddleware } from '@react-dev-inspector/middleware'`
- `'react-dev-inspector/plugins/babel'` -> `'@react-dev-inspector/babel-plugin'`
- `'react-dev-inspector/plugins/umi/react-inspector'`
  - -> `'@react-dev-inspector/umi3-plugin'`
  - -> `'@react-dev-inspector/umi4-plugin'`
- `'react-dev-inspector/plugins/vite'` -> `'@react-dev-inspector/vite-plugin'`


Deprecated and Removed:

- `import type { InspectorConfig } from 'react-dev-inspector/plugins/webpack'`
  - set babel config with `'@react-dev-inspector/babel-plugin'`,
    and config type is `import type { InspectorBabelPlugin } from '@react-dev-inspector/babel-plugin'`

- `import { ReactInspectorPlugin } from 'react-dev-inspector/plugins/webpack'`
  - set webpack dev server with the middleware `launchEditorMiddleware`,
    `import { launchEditorMiddleware } from '@react-dev-inspector/middleware'`
