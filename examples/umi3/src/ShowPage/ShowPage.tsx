import { useState } from 'react'
import { Inspector, defaultHotkeys } from 'react-dev-inspector'
import { ChecksPattern } from './components/Pattern'

import * as S from './styles'


const projectRepo = 'https://github.com/zthxxx/react-dev-inspector'


export const ShowPage = () => {
  const [active, setActive] = useState(false)

  return (
    <Inspector
      active={active}
      onActiveChange={setActive}
    >
      <S.Base>
        <S.GithubCorner
          href={projectRepo}
        />

        <S.ChecksPatternWrapper
          style={{
            top: '1rem',
            left: 0,
            transform: 'rotate(45deg)',
          }}
        >
          <ChecksPattern />
        </S.ChecksPatternWrapper>

        <S.ChecksPatternWrapper
          style={{
            bottom: '0.5rem',
            right: '1.5rem',
            transform: 'rotate(135deg)',
          }}
        >
          <ChecksPattern />
        </S.ChecksPatternWrapper>

        <div
          style={{
            margin: '0 auto',
            maxWidth: '36rem',
          }}
        >
          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <S.Pill>
              {`Read more in `}
              <a
                href='https://react-dev-inspector.zthxxx.me/docs'
                style={{
                  fontWeight: '600',
                  color: 'rgb(37 99 235)',
                  textDecoration: 'none',
                }}
              >
                Documentation →
              </a>
            </S.Pill>
          </div>

          <div style={{ textAlign: 'center' }}>
            <S.Title>
              React Dev Inspector
            </S.Title>

            <S.Slogan>
              Click on a React Component, <S.BreakpointSmall /> take you to the source code in local IDE!
            </S.Slogan>

            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '1.5rem',
              }}
            >
              <S.TipLine>
                try shortcuts or click ↓
              </S.TipLine>

              <S.InspectorButton
                className='group-inspector-button'
                onClick={() => setActive(true)}
              >
                <span>
                  {defaultHotkeys().join(' + ')}
                </span>
                <S.ButtonIcon>🍭</S.ButtonIcon>
              </S.InspectorButton>
            </div>
          </div>
        </div>
      </S.Base>
    </Inspector>
  )
}
