export * from '@react-dev-inspector/components'

export {
  gotoVSCode,
  gotoVSCodeInsiders,
  gotoWebStorm,

  gotoServerEditor,
  /** @deprecated Use `gotoServerEditor` instead. */
  gotoServerEditor as gotoEditor,

  getCodeInfoFromFiber,
  getElementCodeInfo,
  getNamedFiber,
  genInspectChainFromFibers,
} from './utils'

export * from './utils/fiber'

export {
  defaultHotkeys,
} from './hooks'

export {
  DOMInspectAgent,
  domInspectAgent,
} from './DOMInspectAgent'

export * from './types'
export * from './Inspector'
