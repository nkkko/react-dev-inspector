import { Global } from '@emotion/react'
import { Inspector } from 'react-dev-inspector'
import type { InspectParams } from 'react-dev-inspector'
import { Title } from './components/Title'
import { Slogan } from './components/Slogan'
import { KeyPad, Keypress } from './components/Keypress'
import { TitleBadge } from './components/Badge'
import * as S from './styles'


const projectRepo = 'https://github.com/zthxxx/react-dev-inspector'
const isDev = process.env.NODE_ENV === 'development'

export const HomePage = ({ name, titleBadge }: {
  /** example name, as same as package dirname */
  name: string;
  titleBadge?: string;
}) => {
  return (
    <Inspector
      disableLaunchEditor={!isDev}
      onClickElement={(inspect: InspectParams) => {
        console.debug('[InspectParams]', inspect)
        if (isDev || !inspect.codeInfo) return
        const { relativePath, absolutePath, lineNumber } = inspect.codeInfo

        if (relativePath) {
          const onlineFilePath = `examples/${name}/${relativePath}`
          window.open(`${projectRepo}/blob/master/${onlineFilePath}#L${lineNumber}`)
        }
        else if (absolutePath) {
          const onlineFilePath = absolutePath.replace(/^.*?\/examples\//, 'examples/')
          window.open(`${projectRepo}/blob/master/${onlineFilePath}#L${lineNumber}`)
        }
      }}
    >
      <Global styles={S.globalCss} />


      <S.Base>
        <S.GithubCorner
          href={projectRepo}
        />

        <Title>
          <span>React Dev Inspector</span>
          <TitleBadge>{titleBadge}</TitleBadge>
        </Title>

        <Slogan>
          <p>Click on a React Component, take you to the source code in local IDE!</p>
          {
            isDev
              ? null
              : (<p><small>( for this online demo page, jump to GitHub file )</small></p>)
          }
        </Slogan>

        <KeyPad>
          <Keypress>Ctrl ⌃</Keypress>
          +
          <Keypress>Shift ⇧</Keypress>
          +
          <Keypress>Command ⌘</Keypress>
          +
          <Keypress>C</Keypress>
        </KeyPad>
      </S.Base>
    </Inspector>
  )
}
