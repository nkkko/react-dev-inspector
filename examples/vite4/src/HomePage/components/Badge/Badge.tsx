import type { FC, PropsWithChildren } from 'react'
import * as S from './styles'


export const TitleBadge: FC<PropsWithChildren> = (props) => {
  const {
    children,
  } = props

  if (!children) return null

  return (
    <S.Badge>
      {children}
    </S.Badge>
  )
}
