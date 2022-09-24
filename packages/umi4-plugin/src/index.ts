/**
 * preset plugins for umi4
 */

import type { IApi } from 'umi'
import {
  createLaunchEditorMiddleware,
} from '@react-dev-inspector/middleware'
import type { InspectorPluginOptions } from '@react-dev-inspector/babel-plugin'

export default function inspectorPlugin(api: IApi) {
  const inspectorConfig = api.userConfig.inspectorConfig as InspectorPluginOptions | undefined

  api.describe({
    key: 'inspectorConfig',
    config: {
      schema(joi) {
        return joi.object()
      },
    },
    enableBy: api.EnableBy.register,
  })

  api.addBeforeBabelPlugins(() => [
    [
      require.resolve('@react-dev-inspector/babel-plugin'),
      {
        cwd: inspectorConfig?.cwd,
        excludes: [
          /\.umi(-production)?\//,
          ...inspectorConfig?.excludes ?? [],
        ],
      },
    ],
  ])

  api.addBeforeMiddlewares(createLaunchEditorMiddleware)
}