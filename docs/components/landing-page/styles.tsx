
import { Steps as NextraSteps } from 'nextra/components'
import { styled } from '@utils/tw-styled'


export const CenterHeader = styled.h2({
  displayName: 'CenterHeader',
  className: `
    scroll-mt-20 text-center text-2xl font-bold text-black
    hover:no-underline dark:text-white lg:text-3xl
  `,
})

export const CenterDescription = styled.p({
  displayName: 'CenterDescription',
  className: `
    mx-auto max-w-[70ch] pt-2
    text-center text-sm text-zinc-600 dark:text-zinc-300 md:text-base
  `,
})

export const Steps = styled(NextraSteps, {
  className: `
    mb-4 lg:mb-2
    [&>h3]:flex [&>h3]:items-center
    [&>h3]:before:flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:content-[counter(step)]
    [&>h3]:mt-8 [&>h3]:!font-medium [&>h3]:!text-xl [&>h3]:lg:!text-2xl
    [&>h3]:tracking-tight [&>h3]:text-slate-900 [&>h3]:dark:text-slate-100
    [&>p]:mt-2
  `,
})

export const InspectorButton = styled.button({
  displayName: 'InspectorButton',
  className: `
    inline-block py-2 px-6 rounded-full
    select-none text-white no-underline [text-shadow:0_1px_1px_#000]
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
