import { styled } from '@utils/tw-styled'

export const StepContainer = styled.div({
  displayName: 'StepContainer',
  className: `
    flex justify-center items-center my-4 py-2 w-full
    select-none text-sm font-medium text-center text-gray-500 lg:text-base
    dark:text-gray-400
  `,
})

export const StepItem = styled.a({
  displayName: 'StepItem',
  className: `
    group/step flex justify-center items-center grow-0 w-auto whitespace-nowrap

    [&[href]]:hover:text-gray-500/80 dark:[&[href]]:hover:text-gray-300/90
    data-[active]:text-blue-600 data-[active]:dark:text-blue-500
  `,
})

export const StepDivider = styled.div({
  displayName: 'StepDivision',
  className: `
    last:hidden
    flex justify-center items-center grow w-auto h-auto
    after:grow after:content-['/'] after:w-auto after:h-auto after:mx-2
    after:text-gray-300 after:border-gray-300 after:border-0

    lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:mx-6
    lg:after:border-b

    lg:after:mx-3 xl:after:mx-4

    dark:after:text-gray-200 dark:after:border-gray-700
  `,
})

export const StepIndex = styled.span({
  displayName: 'StepIndex',
  className: `
    relative flex justify-center items-center mr-2
    rounded-full border-2 w-6 h-6
    text-sm font-normal

    border-gray-300 dark:border-gray-500
    group-hover/step:border-gray-300/80 dark:group-hover/step:border-gray-400

    data-[active]:bg-blue-500 data-[active]:border-0
    data-[active]:text-white data-[active]:font-semibold
    data-[active]:dark:bg-blue-600
  `,
})
