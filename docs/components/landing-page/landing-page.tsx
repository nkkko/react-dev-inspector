
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Steps } from 'nextra/components'
import { Inspector } from 'react-dev-inspector'
import inspectPreview from '@images/inspect.gif'
import { Feature, Features } from '@components/features'
import { StackBlitz } from '@components/stack-blitz'
import { Marquee } from '@components/marquee'
import { DotsPattern } from '@components/pattern'
import styles from './index.module.css'


import {
  FrameworkLogos,
} from './items'

const projectRepo = 'https://github.com/zthxxx/react-dev-inspector'
const isDev = process.env.NODE_ENV === 'development'

export const LandingPage = () => {
  const [active, setActive] = useState(false)

  return (
    <div className='home-content'>
      <Inspector
        active={active}
        onActiveChange={setActive}
        disableLaunchEditor={!isDev}
        onClickElement={(inspect) => {
          if (isDev || !inspect.codeInfo) return

          const { relativePath, absolutePath, lineNumber } = inspect.codeInfo
          if (relativePath) {
            const onlineFilePath = `docs/${relativePath}`
            window.open(`${projectRepo}/blob/dev/${onlineFilePath}#L${lineNumber}`)
          }
          else if (absolutePath) {
            const onlineFilePath = absolutePath.replace(/^.*?\/docs\//, 'docs/')
            window.open(`${projectRepo}/blob/dev/${onlineFilePath}#L${lineNumber}`)
          }
        }}
      />
      <div className='content-container'>
        <h1 className='headline'>
          {'Seamless browser-to-editor '}
          <br className='sm:block hidden' />
          code navigation.
        </h1>
        <p className='subtitle'>
          {'Inspect in browser, click, then you will get its source code '}
          <br className='sm:block hidden' />
          in your local IDE, instantly.
        </p>
        <p className='subtitle'>
          <Link className={styles.cta} href='/docs'>Get started <span>→</span></Link>
        </p>
      </div>

      <div className='features-container'>
        <div className='content-container'>
          <Features>
            <Feature
              id='preview-card'
              fulled
              centered
            >
              <div className='docs-img-wrapper'>
                <Image src={isDev ? '' : inspectPreview} alt='Background' loading='eager' />
              </div>
            </Feature>

            <Feature
              id='integration-cards'
              fulled
              centered
              unbounded
            >
              <h2
                className='scroll-mt-20 text-center text-2xl font-bold text-black hover:no-underline dark:text-white lg:text-3xl'
              >
                Simple to integrate with <br /> your React frameworks and Editors
              </h2>
              <p className='mx-auto max-w-[70ch] pt-2 text-center text-sm text-zinc-600 dark:text-zinc-300 md:text-base'>
                It's quick and easy to get started with some built-in plugins for most popular React frameworks.
              </p>
              <div
                className='relative mt-10 pb-1'
              >
                <DotsPattern />

                <Marquee>
                  <FrameworkLogos />
                </Marquee>

                <Marquee reversed>
                  <FrameworkLogos reversed />
                </Marquee>
              </div>
            </Feature>

            <Feature
              id='online-preview-feature'
              fulled
              centered
              unbounded
            >
              <h2
                className='scroll-mt-20 text-center text-2xl font-bold text-black hover:no-underline dark:text-white lg:text-3xl'
              >
                Prefer an online demo?
              </h2>
              <p
                className='mx-auto max-w-[70ch] pt-2 text-center text-sm text-zinc-600 dark:text-zinc-300 md:text-base'
              >
                Okay, it's also supported on StackBlitz, CodeSandbox, Gitpod, Replit, <br className='sm:block hidden' /> GitHub Codespaces and other Cloud IDEs.
              </p>
            </Feature>

            <Feature
              id='online-editor-demo'
              fulled
              centered
            >
              <StackBlitz
                // https://stackblitz.com/edit/github-x3rkzl?file=package.json,vite.config.ts%3AL17
                project='edit/github-x3rkzl'
                openFile='package.json,vite.config.ts%3AL17'
                view='default'
              />
            </Feature>


            <Feature
              large
              id='fs-card'
              style={{
                color: 'white',
                backgroundImage: 'url(/assets/routing.png), url(/assets/gradient-bg.jpeg)',
                backgroundSize: '140%, 180%',
                backgroundPosition: '130px -8px, top',
                backgroundRepeat: 'no-repeat',
                textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
                aspectRatio: '1.765',
              }}
              href='/docs/docs-theme/page-configuration'
            >
              <h3>Organize pages intuitively, <br />with file-system routing from Next.js.</h3>
            </Feature>

            <Feature>
              <h3>That's how it works</h3>
              <div>
                <Steps
                  className='
                    [&>h3]:flex [&>h3]:items-center
                    [&>h3]:before:flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:content-[counter(step)]
                    [&>h3]:mt-8 [&>h3]:!text-2xl [&>h3]:!font-medium
                    [&>h3]:tracking-tight [&>h3]:text-slate-900 [&>h3]:dark:text-slate-100
                    [&>p]:mt-2
                  '
                >
                  <h3>The Inspector Component</h3>
                  <p>
                    The compiler writes source info on component's fiber,
                    and the <code>react-dev-inspector</code> will read it.
                  </p>

                  <h3>Read JSX Code Source</h3>
                  <p>
                    The compiler writes source info on component's fiber,
                    and the <code>react-dev-inspector</code> will read it.
                  </p>

                  <h3>Step 2</h3>
                  <p>&nbsp;</p>

                </Steps>
              </div>
            </Feature>

            <Feature>
              <h3>Try now, at once.</h3>
              <p>Yes, you can try the <code>react-dev-inspector</code> immediately on this page by the button below!</p>
              <p
                className='pt-2 lg:pt-8 flex justify-center lg:justify-start'
              >
                <button
                  className='
                    inline-block py-2 px-6 mt-2 rounded-full
                    select-none text-white no-underline [text-shadow:0_1px_1px_#000]
                    shadow-sm shadow-blue-500/50

                    bg-gradient-to-b from-[#4fa0fd] to-[#248aff]

                    hover:shadow-[0_5px_30px_-10px] hover:shadow-[#0078ffab] hover:brightness-105
                    active:shadow active:shadow-[#00295738] active:brightness-95
                    focus:outline-none
                    transition-all duration-200 ease
                    [&_span]:ml-0.5
                    [&_span]:inline-block [&_span]:transition-all [&_span]:duration-200 [&_span]:ease
                    [&_span]:hover:translate-x-1 [&_span]:hover:scale-105
                  '
                  onClick={() => setActive(true)}
                >
                  Inspect now <span>🍭</span>
                </button>
              </p>
              <p />
            </Feature>

            <Feature large>
              <h3>And more...</h3>
              <p>
                Examples / Configuration / Built-in Plugins / API / Fully Controlled Usages ...
                <br />
                A lot of new possibilities to be explored.
              </p>

              <p className='subtitle pt-4 lg:pt-8'>
                <Link className='!no-underline' href='/docs'>Getting the Docs →</Link>
              </p>
            </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}
