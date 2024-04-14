import {
  launchEditorEndpoint,
  type LaunchEditorParams,
  type TrustedEditor,
} from '@react-dev-inspector/launch-editor-endpoint'
import type { CodeInfo } from '../types'


type CodeInfoLike = CodeInfo | { codeInfo: CodeInfo }

const getCodeInfo = (_codeInfo: CodeInfoLike): CodeInfo => (
  'codeInfo' in _codeInfo
    ? _codeInfo.codeInfo
    : _codeInfo
)

/**
 * fetch server api to open the code editor
 */
export const gotoServerEditor = (_codeInfo?: CodeInfoLike, options?: {
  editor?: TrustedEditor;
}) => {
  if (!_codeInfo) return
  const codeInfo = getCodeInfo(_codeInfo)

  const {
    lineNumber,
    columnNumber,
    relativePath,
    absolutePath,
  } = codeInfo

  const isRelative = Boolean(relativePath)
  const fileName = isRelative ? relativePath : absolutePath

  if (!fileName) {
    console.error(`[react-dev-inspector] Cannot open editor without source fileName`, codeInfo)
    return
  }

  const launchParams: LaunchEditorParams = {
    fileName,
    lineNumber,
    colNumber: columnNumber,
    editor: options?.editor,
  }

  const urlParams = new URLSearchParams(
    Object.entries(launchParams)
      .filter(([, value]) => Boolean(value)) as [string, string][],
  )

  /**
   * api path in {@link {import('@react-dev-inspector/middlewares').launchEditorMiddleware}}
   */
  const apiRoute = isRelative
    ? `${launchEditorEndpoint}/relative`
    : launchEditorEndpoint

  fetch(`${apiRoute}?${urlParams}`)
}

/**
 * open source file in VSCode via it's url schema
 *
 * https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls
 */
export const gotoVSCode = (_codeInfo: CodeInfoLike, options?: { insiders?: boolean }) => {
  const codeInfo = getCodeInfo(_codeInfo)

  if (!codeInfo.absolutePath) {
    console.error(`[react-dev-inspector] Cannot open editor without source fileName`, codeInfo)
    return
  }
  const { absolutePath, lineNumber, columnNumber } = codeInfo
  const schema = options?.insiders ? 'vscode-insiders' : 'vscode'
  window.open(`${schema}://file/${absolutePath}:${lineNumber}:${columnNumber}`)
}

/**
 * open source file in VSCode via it's url schema
 */
export const gotoVSCodeInsiders = (codeInfo: CodeInfoLike) => {
  return gotoVSCode(codeInfo, { insiders: true })
}


/**
 * open source file in WebStorm via it's url schema
 */
export const gotoWebStorm = (_codeInfo: CodeInfoLike) => {
  const codeInfo = getCodeInfo(_codeInfo)

  if (!codeInfo.absolutePath) {
    console.error(`[react-dev-inspector] Cannot open editor without source fileName`, codeInfo)
    return
  }
  const { absolutePath, lineNumber, columnNumber } = codeInfo
  window.open(`webstorm://open?file=${absolutePath}&line=${lineNumber}&column=${columnNumber}`)
}
