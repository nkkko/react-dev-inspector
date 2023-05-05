import { useState } from 'react'
import { Inspector } from 'react-dev-inspector'
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
                className='mt-6 mb-2 leading-8 text-gray-600 font-light text-base sm:text-lg'
              >
                try shortcuts or click ↓
              </div>

              <S.InspectorButton
                className='group'
                onClick={() => setActive(true)}
              >
                <span className='text-sm sm:text-base'>
                  Ctrl + Shift + Command + C
                </span>
                <span
                  className='
                    ml-3 transition-all duration-200 ease
                    group-hover:translate-x-0.5
                    group-hover:scale-110
                  '
                >
                  🍭
                </span>
              </S.InspectorButton>
            </div>
          </div>
        </div>
      </S.Base>
    </Inspector>
  )
}
