import {
  Inspector,
  gotoServerEditor,
  type InspectParams,
} from 'react-dev-inspector'
import {
  isDev,
  projectRepo,
} from '@utils'


/**
 * only for online showcase in docs site
 */
export const OnlineInspector = ({ active, setActive }: {
  active?: boolean;
  setActive?: (active: boolean) => void;
}) => {
  return (
    <Inspector
      disable={false}
      active={active}
      onActiveChange={setActive}
      onInspectElement={handleInspectOnline}
    />
  )
}

const handleInspectOnline = (inspect: InspectParams) => {
  if (!inspect.codeInfo) {
    return
  }

  if (isDev) {
    return gotoServerEditor(inspect.codeInfo)
  }

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
