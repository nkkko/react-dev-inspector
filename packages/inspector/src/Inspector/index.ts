export {
  gotoVSCode,
  gotoVSCodeInsiders,
  gotoWebStorm,

  gotoServerEditor,
  /** @deprecated Use `gotoServerEditor` instead. */
  gotoServerEditor as gotoEditor,
} from './utils'

export * as inspectUtils from './utils/inspect'
export * as fiberUtils from './utils/fiber'

export {
  defaultHotkeys,
} from './hooks'

export {
  type DOMElement,
  DOMInspectAgent,
  domInspectAgent,
} from './DOMInspectAgent'

export * from './types'
export * from './Inspector'
