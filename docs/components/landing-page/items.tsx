
import type { ReactNode } from 'react'
import { ArrowRightIcon } from '@components/icons'
import cn from 'clsx'
import type { ClassValue } from 'clsx'
import { useState } from 'react'
import styles from './index.module.css'


export function File({ name, className, ...props }: {
  name: string;
  className?: ClassValue;
} & Omit<JSX.IntrinsicElements['span'], 'className'>) {
  return (
    <span className={cn(styles.file, className)} {...props}>
      {name}
    </span>
  )
}

export function Comparison({ a, b, invert, ...props }: {
  a: ReactNode;
  b: ReactNode;
  invert?: boolean;
} & JSX.IntrinsicElements['div']) {
  return (
    <div className={cn(styles.comparison, invert && styles.invert)} {...props}>
      <div>{a}</div>
      <ArrowRightIcon width='1.2em' />
      <div>{b}</div>
    </div>
  )
}

export function I18n() {
  const [active, setActive] = useState('')
  return (
    <Comparison
      a={(
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <File
            name='/hello.en-US.mdx'
            className={active === 'en' && styles.active}
            onPointerOver={() => setActive('en')}
          />
          <File
            name='/hello.de-DE.mdx'
            className={active === 'de' && styles.active}
            onPointerOver={() => setActive('de')}
          />
          <File
            name='/hello.ja-JP.mdx'
            className={active === 'ja' && styles.active}
            onPointerOver={() => setActive('ja')}
          />
        </div>
      )}
      b={(
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className='menu overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:ring-white dark:ring-opacity-20'
        >
          <span
            className={cn(
              'relative cursor-default select-none whitespace-nowrap px-4 py-1.5',
              active === 'en'
                ? 'nx-text-primary-600 nx-bg-primary-50 dark:nx-bg-primary-500/10'
                : 'text-gray-800 dark:text-gray-100 ',
            )}
            onPointerOver={() => setActive('en')}
          >
            English
          </span>
          <span
            className={cn(
              'relative cursor-default select-none whitespace-nowrap px-4 py-1.5',
              active === 'de'
                ? 'nx-text-primary-600 nx-bg-primary-50 dark:nx-bg-primary-500/10'
                : 'text-gray-800 dark:text-gray-100 ',
            )}
            onPointerOver={() => setActive('de')}
          >
            Deutsch
          </span>
          <span
            className={cn(
              'relative cursor-default select-none whitespace-nowrap px-4 py-1.5',
              active === 'ja'
                ? 'nx-text-primary-600 nx-bg-primary-50 dark:nx-bg-primary-500/10'
                : 'text-gray-800 dark:text-gray-100 ',
            )}
            onPointerOver={() => setActive('ja')}
          >
            日本語
          </span>
        </div>
      )}
    />
  )
}
