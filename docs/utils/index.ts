import {
  gotoServerEditor,
  type InspectParams,
} from 'react-dev-inspector'


export * from './css'

export const isDev = process.env.NODE_ENV === 'development'

export const projectRepo = 'https://github.com/zthxxx/react-dev-inspector'

export const handleInspectOnline = (inspect: Required<InspectParams>) => {
  if (isDev) return gotoServerEditor(inspect.codeInfo)

  const { relativePath, absolutePath, lineNumber } = inspect.codeInfo
  if (relativePath) {
    const onlineFilePath = `docs/${relativePath}`
    window.open(`${projectRepo}/blob/dev/${onlineFilePath}#L${lineNumber}`)
  }
  else if (absolutePath) {
    const onlineFilePath = absolutePath.replace(/^.*?\/docs\//, 'docs/')
    window.open(`${projectRepo}/blob/dev/${onlineFilePath}#L${lineNumber}`)
  }
}
