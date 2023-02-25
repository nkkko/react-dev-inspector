import { type FC, type PropsWithChildren, Component } from 'react'
import * as S from './styles'


export const Keypress: FC<PropsWithChildren> = ({ children }) => {
  return (
    <kbd
      className={S.keyTone}
    >
      {children}
    </kbd>
  )
}

export class KeyPad extends Component<PropsWithChildren> {
  public render() {
    const {
      children,
    } = this.props

    return (
      <S.Pad>
        <span>press</span>

        <S.Keys>{children}</S.Keys>

        <span>to try! 🍭</span>
      </S.Pad>
    )
  }
}
