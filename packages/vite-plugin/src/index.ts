import type { Plugin } from 'vite'
import {
  queryParserMiddleware,
  launchEditorMiddleware,
} from '@react-dev-inspector/middleware'

export const inspectorServer = (): Plugin => ({
  name: 'inspector-server-plugin',
  configureServer(server) {
    server.middlewares.use(queryParserMiddleware)
    server.middlewares.use(launchEditorMiddleware)
  },
})
