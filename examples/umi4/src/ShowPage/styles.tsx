import Corner from 'react-github-corner'
import { styled } from './tw-styled'


export const Base = styled.div({
  displayName: 'Base',
  className: `
    grid place-items-center px-6 lg:px-8 relative z-0
    min-h-screen overflow-hidden
  `,
})

export const GithubCorner = styled(Corner, {
  displayName: 'GithubCorner',
  className: `absolute top-0 right-0`,
})

export const Title = styled.h1({
  displayName: 'Title',
  className: `
    font-bold whitespace-nowrap text-gray-900 text-[min(8vw,2.25rem)] sm:text-6xl
    transition-all duration-200 ease
  `,
})

export const Slogan = styled.p({
  displayName: 'Slogan',
  className: `
    mt-6 text-gray-600 text-[min(4.5vw,1.25rem)] leading-[min(6vw,1.75rem)] sm:text-lg
    transition-all duration-200 ease
  `,
})

export const InspectorButton = styled.button({
  displayName: 'InspectorButton',
  className: `
    inline-block py-2 px-6 rounded-full
    select-none text-white whitespace-nowrap no-underline [text-shadow:0_1px_1px_#000]
    shadow-sm shadow-blue-500/50

    bg-gradient-to-b from-[#4fa0fd] to-[#248aff]

    hover:shadow-[0_5px_30px_-10px] hover:shadow-[#0078ffab] hover:brightness-105
    active:shadow active:shadow-[#00295738] active:brightness-95
    focus:outline-none
    transition-all duration-200 ease
  `,
})

export const ButtonIcon = styled.span({
  displayName: 'ButtonIcon',
  className: `
    inline-block ml-2 transition-all duration-200 ease
    group-hover:translate-x-0.5
    group-hover:scale-110
  `,
})

export const Pill = styled.div({
  displayName: 'Pill',
  className: `
    relative rounded-full px-3 py-1
    whitespace-nowrap text-gray-600 text-[min(4vw,.75rem)] leading-[min(5vw,1rem)] sm:text-sm
    ring-1 ring-gray-900/10 hover:ring-gray-900/20
  `,
})
