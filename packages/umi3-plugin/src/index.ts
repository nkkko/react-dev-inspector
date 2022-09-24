/**
 * preset plugins for umi3
 */

import type { IApi, RequestHandler } from '@umijs/types'
import {
  launchEditorMiddleware,
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

  api.modifyBabelOpts((babelOptions) => {
    babelOptions.plugins.unshift([
      require.resolve('@react-dev-inspector/babel-plugin'),
      {
        cwd: inspectorConfig?.cwd,
        excludes: [
          /\.umi(-production)?\//,
          ...inspectorConfig?.excludes ?? [],
        ],
      },
    ])
    return babelOptions
  })

  const createMiddleware = () => launchEditorMiddleware as RequestHandler<any>

  /**
   * due to umi3 not use webpack devServer,
   * so need add launch editor middleware manually
   */
  api.addBeforeMiddlewares
    ? api.addBeforeMiddlewares(createMiddleware)
    // typo of umi legacy api
    : api.addBeforeMiddewares(createMiddleware)
}
