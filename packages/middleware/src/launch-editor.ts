import path from 'path'
import type { NextHandleFunction, IncomingMessage } from 'connect'
import type { RequestHandler } from 'express'
/**
 * https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/launchEditorEndpoint.js
 * used in https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/errorOverlayMiddleware.js#L14
 */
// @ts-expect-error import from deep path for reduce load files
import launchEditorEndpoint from 'react-dev-utils/launchEditorEndpoint'
import createReactLaunchEditorMiddleware from 'react-dev-utils/errorOverlayMiddleware'
import type { QueryParams } from './query-params-parser'

const reactLaunchEditorMiddleware = createReactLaunchEditorMiddleware() as NextHandleFunction

export const launchEditorMiddleware: NextHandleFunction = (req: IncomingMessage & { query?: QueryParams }, res, next) => {
  if (!('REACT_EDITOR' in process.env)) {
    /**
     * If not set `REACT_EDITOR` in environment variables, set default to `vscode`.
     * - (`code` is cli command installed by `vscode`:  `>Shell Command: Install 'code' command in PATH`)
     * - link: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
     *
     * ---
     *
     * `REACT_EDITOR` env var is used in `react-dev-utils/launchEditor`,
     * for launch editor(IDE) in backend of `REACT_EDITOR`.
     *
     * If not provide `REACT_EDITOR`, `react-dev-utils/launchEditor` will guess one editor(IDE) which user opened.
     *
     * They called "Auto-detect more common editors" -> (https://github.com/facebook/create-react-app/issues/2636)
     *
     * but sometimes the guess result is wrong, so we make it default to `vscode` for frontend developer.
     *
     * ---
     *
     * used in https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/launchEditor.js#L198
     */
    process.env.REACT_EDITOR = 'code'
  }

  if (req.url?.startsWith(launchEditorEndpoint) && req.query) {
    /**
     * retain origin endpoint for backward compatibility <= v1.2.0
     */
    if (
      // relative route used in `Inspector.tsx` `gotoEditor()`
      req.url?.startsWith(`${launchEditorEndpoint}/relative`)
      && typeof req.query.fileName === 'string'
    ) {
      // at here, transform relative path to absolute path for launch editor
      req.query.fileName = path.join(process.cwd(), req.query.fileName)
    }

    reactLaunchEditorMiddleware(req, res, next)
  } else {
    next()
  }
}


export const createLaunchEditorMiddleware: (() => RequestHandler<any>) = () => launchEditorMiddleware