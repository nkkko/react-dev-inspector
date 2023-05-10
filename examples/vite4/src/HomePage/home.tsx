import { useState } from 'react'
import { Inspector, defaultHotkeys } from 'react-dev-inspector'
import { ChecksPattern } from './components/Pattern'

import * as S from './styles'


const projectRepo = 'https://github.com/zthxxx/react-dev-inspector'


export const HomePage = ({ name, titleBadge }: {
  /** example name, as same as package dirname */
  name: string;
  titleBadge?: string;
}) => {
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

        <div
          className='
            absolute -z-10 top-4 left-0 rotate-45
            [aspect-ratio:1] max-w-[70vw] w-[564px] h-auto
            fill-blue-400/10 stroke-indigo-300/30
          '
        >
          <ChecksPattern />
        </div>

        <div
          className='
            absolute -z-10 bottom-2 right-6 rotate-[135deg]
            [aspect-ratio:1] max-w-[70vw] w-[564px] h-auto
            fill-blue-400/10 stroke-indigo-300/30
          '
        >
          <ChecksPattern />
        </div>

        <div className='mx-auto max-w-2xl'>
          <div className='mb-8 flex justify-center'>
            <S.Pill>
              {`Read more in `}
              <a
                href='https://react-dev-inspector.zthxxx.me'
                className='font-semibold text-blue-600'
              >
                Documentation →
              </a>
            </S.Pill>
          </div>

          <div className='text-center'>
            <S.Title>
              React Dev Inspector
            </S.Title>

            <S.Slogan>
              Click on a React Component, <br className='block sm:hidden' /> take you to the source code in local IDE!
            </S.Slogan>

            <div
              className='
                mt-8 flex flex-col items-center justify-center gap-x-6
              '
            >
              <div
                className='mt-6 mb-2 text-gray-600 font-light text-[min(4.5vw,1rem)] leading-[min(6vw,1.75rem)] sm:text-lg'
              >
                try shortcuts or click ↓
              </div>

              <S.InspectorButton
                className='group text-[min(4vw,.875rem)] leading-[min(5vw,1.25rem)] sm:text-base'
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
