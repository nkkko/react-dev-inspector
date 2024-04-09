import { styled } from '#utils'


export const LayerSide = styled.div({
  class: `
    flex flex-none flex-col items-stretch justify-stretch
    w-10 border-r border-border box-content
  `,
})

export const Title = styled.div({
  class: `
    flex flex-none items-center justify-center text-sm
    overflow-hidden whitespace-nowrap text-ellipsis
    h-9 text-text-0
  `,
})

export const Divider = styled.div({
  class: `
    flex flex-none items-center justify-between gap-1.5 text-xs
    w-6 h-[1px] mb-1 mx-auto bg-border
  `,
})

export const LayerList = styled.div({
  class: `
    flex flex-auto flex-col items-stretch justify-start
    no-scrollbar  overflow-x-auto box-content
    text-text-2 select-none  relative
  `,
})

export const LayerItem = styled.div({
  class: `
    flex flex-none items-center justify-center
    overflow-hidden whitespace-nowrap text-ellipsis
    aria-selected:sticky aria-selected:top-0 aria-selected:bottom-0 aria-selected:z-10
    h-8 bg-bg-1 text-text-2 font-mono
  `,
})

export const LayerItemText = styled.span({
  class: `opacity-85`,
})
