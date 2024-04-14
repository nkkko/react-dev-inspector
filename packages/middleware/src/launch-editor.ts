import path from 'path'
import type { NextHandleFunction } from 'connect'
import type { RequestHandler } from 'express'
import launchEditor from 'launch-editor'
import {
  launchEditorEndpoint,
  type LaunchEditorParams,
  TrustedEditor,
  reactDevUtilsLaunchEditorEndpoint,
} from '@react-dev-inspector/launch-editor-endpoint'
import {
  type IncomingRequest,
} from './query-params-parser'


const trustedEditors = new Set(Object.values(TrustedEditor))

/**
 * middleware endpoint {@link launchEditorEndpoint}
 */
export const launchEditorMiddleware: NextHandleFunction = (req: IncomingRequest, res, next) => {
  if (
    !req.url?.startsWith(launchEditorEndpoint)
    // retain origin endpoint for backward compatibility <= v2.1.0-beta.7
    && !req.url?.startsWith(reactDevUtilsLaunchEditorEndpoint)
  ) {
    return next()
  }

  const url = new URL(req.url, 'https://placeholder.domain')
  const params = Object.fromEntries(url.searchParams.entries()) as unknown as LaunchEditorParams

  if (!params.fileName) {
    res.statusCode = 400
    return res.end(`[launch-editor-middleware]: required query param "fileName" is missing.`)
  }

  const fileName = path.resolve(process.cwd(), params.fileName)

  let filePathWithLines = fileName
  if (params.lineNumber) {
    filePathWithLines += `:${params.lineNumber}`
    if (params.colNumber) {
      filePathWithLines += `:${params.colNumber}`
    }
  }

  if (params.editor && !trustedEditors.has(params.editor)) {
    res.statusCode = 400
    return res.end(`[launch-editor-middleware]: the specified editor (${params.editor}) is not trusted on server! To open this editor, please use URL-scheme to call it from browser.`)
  }

  const editor = params.editor
    ? params.editor
    : (
      /**
       * `LAUNCH_EDITOR` env var is used in `launch-editor`, which is a standalone usage of `react-dev-utils/launchEditor`,
       * for launch editor(IDE) in backend of `LAUNCH_EDITOR`.
       *
       * https://github.com/yyx990803/launch-editor/tree/v2.8.0?tab=readme-ov-file#custom-editor-support
       */
      process.env.LAUNCH_EDITOR

      /**
       * retain `REACT_EDITOR` for backward compatibility
       * https://react-dev-inspector.zthxxx.me/docs/editor-settings
       */
      || process.env.REACT_EDITOR

      /**
       * If not set `LAUNCH_EDITOR` / `REACT_EDITOR` in environment variables, set default to `vscode`.
       * - (`code` is cli command installed by `vscode`:  `>Shell Command: Install 'code' command in PATH`)
       * - link: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
       *
       * ---
       *
       * If not provide `LAUNCH_EDITOR`, `launch-editor` will guess one editor(IDE) which user opened.
       *
       * They called "Auto-detect more common editors" -> (https://github.com/facebook/create-react-app/issues/2636)
       *
       * but sometimes the guess result is wrong, so we make it default to `vscode` for most of frontend developer.
       */
      || TrustedEditor.VSCode
    )

  launchEditor(filePathWithLines, editor)
  res.end()
}


export const createLaunchEditorMiddleware: (() => RequestHandler<any>) = () => launchEditorMiddleware
