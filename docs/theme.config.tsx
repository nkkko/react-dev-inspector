import { useEffect, type FC, type PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import {
  type DocsThemeConfig,
  useConfig,
} from 'nextra-theme-docs'
import mediumZoom from 'medium-zoom'
import { NextraLogo } from '@components/icons'

const nameTitle = (
  <span
    className='py-2 font-bold text-xl hover:transition-[mask-position] hover:duration-1000 hover:ease'
  >
    React Dev Inspector
    <style jsx>
      {`
        span {
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        span:hover {
          mask-position: 100%;
        }
      `}
    </style>
  </span>
)

export const MainContentRender: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    /**
     * Allow images to be zoomed in on click
     */
    mediumZoom('[data-zoomable]', { background: '#666' })
  }, [])

  return (<>{children ?? null}</>)
}

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/zthxxx/react-dev-inspector',
  },
  docsRepositoryBase: 'https://github.com/zthxxx/react-dev-inspector/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – React Dev Inspector',
      }
    }
  },
  logo: nameTitle,
  head: function useHead() {
    const { title } = useConfig()

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='og:title'
          content={title ? `${title} – React Dev Inspector` : 'React Dev Inspector'}
        />
        <meta
          name='description'
          content='Make beautiful websites with Next.js & MDX.'
        />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link
          rel='icon'
          href='/favicon-dark.svg'
          type='image/svg+xml'
          media='(prefers-color-scheme: dark)'
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className='cursor-default'>{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  // disable due to some render hooks bug in nextra
  // main: MainContentRender,
  footer: {
    text: (
      <div className='flex w-full flex-col items-center sm:items-start'>
        <div>
          <a
            className='flex items-center gap-2 text-current'
            target='_blank'
            rel='noopener noreferrer'
            title='Nextra'
            href='https://nextra.site/'
          >
            <span>Powered by</span>
            <span>
              <NextraLogo height={20} />
            </span>
          </a>
        </div>
      </div>
    ),
  },
}

export default config
