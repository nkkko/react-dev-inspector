import cn from 'clsx'

export const DotsPattern = ({ className }: {
  className?: string;
}) => (
  <svg
    className={cn(
      `
        pointer-events-none absolute w-full h-full inset-0
        fill-gray-500/40 dark:fill-gray-400/40
        [mask-image:radial-gradient(circle_at_center,white,transparent)]
      `,
      className,
    )}
  >
    <defs>
      <pattern id=':rb:' width='16' height='16' patternUnits='userSpaceOnUse' patternContentUnits='userSpaceOnUse' x='0' y='0'>
        <circle cx='1' cy='1' r='1' />
      </pattern>
    </defs>
    <rect width='100%' height='100%' strokeWidth='0' fill='url(#:rb:)' />
  </svg>
)
