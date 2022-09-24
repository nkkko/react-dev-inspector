import type { FC, PropsWithChildren } from 'react'
import * as S from './styles'


export const Title: FC<PropsWithChildren> = (props) => {
  const {
    children,
  } = props

  return (
    <S.TitleName>
      {children}
    </S.TitleName>
  )
}
