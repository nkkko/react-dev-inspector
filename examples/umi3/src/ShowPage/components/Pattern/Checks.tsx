import type { CSSProperties } from 'react'

export const ChecksPattern = ({ className, style }: {
  className?: string;
  style?: CSSProperties;
}) => {
  /**
   * (6,2) (4,3) (7,6) (2,7)
   */
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 564 564'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        WebkitMaskImage: 'radial-gradient(300px circle at center,white,transparent)',
        maskImage: 'radial-gradient(300px circle at center,white,transparent)',
        ...style,
      }}
      className={className}
    >
      <defs>
        <pattern
          id=':r1s:'
          width='56.5'
          height='56.5'
          patternUnits='userSpaceOnUse'
          x='-1'
          y='-1'
        >
          <path
            d='M.5,56.5 V.5 H56.5'
            fill='none'
            strokeWidth='1'
            strokeDasharray='0'
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' stroke='none' fill='url(#:r1s:)' />
      <g x='-1' y='-1' style={{ overflow: 'visible' }}>
        <rect stroke='none' width='56.5' height='56.5' x='339' y='113' />
        <rect stroke='none' width='56.5' height='56.5' x='226' y='169.5' />
        <rect stroke='none' width='56.5' height='56.5' x='395.5' y='339' />
        <rect stroke='none' width='56.5' height='56.5' x='113' y='395.5' />
      </g>
    </svg>
  )
}
