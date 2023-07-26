
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inspector } from 'react-dev-inspector'
import inspectPreview from '@images/inspect.gif'
import workingPipeline from '@images/working-pipeline.svg'
import { isDev, handleInspectOnline } from '@utils'
import { Feature, Features } from '@components/features'
import { StackBlitz } from '@components/stack-blitz'
import { Marquee } from '@components/marquee'
import { DotsPattern } from '@components/pattern'
import styles from './index.module.css'
import * as S from './styles'


import {
  FrameworkLogos,
} from './items'

export const LandingPage = () => {
  const [active, setActive] = useState(false)

  return (
    <div className='home-content'>
      <Inspector
        disable={false}
        active={active}
        onActiveChange={setActive}
        onInspectElement={handleInspectOnline}
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
              href='/showcase'
            >
              <Link
                className='docs-img-wrapper'
                href='/showcase'
                target='_blank'
              >
                {!isDev && (
                  <Image src={inspectPreview} alt='Background' loading='eager' />
                )}
              </Link>
            </Feature>

            <Feature
              id='integration-cards'
              fulled
              centered
              unbounded
            >
              <S.CenterHeader>
                Simple to integrate with <br /> your React frameworks and Editors
              </S.CenterHeader>
              <S.CenterDescription>
                It's quick and easy to get started with some built-in plugins for most popular React frameworks.
              </S.CenterDescription>
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
              <S.CenterHeader>
                Prefer an online demo?
              </S.CenterHeader>
              <S.CenterDescription>
                Okay, it's also supported on StackBlitz, CodeSandbox, Gitpod, Replit, <br className='sm:block hidden' /> GitHub Codespaces and other remote Cloud IDEs.
              </S.CenterDescription>
            </Feature>

            <Feature
              id='online-editor-demo'
              fulled
              centered
            >
              <StackBlitz
                /**
                 * Link: https://stackblitz.com/edit/github-x3rkzl?file=package.json,vite.config.ts%3AL17
                 * From: https://stackblitz.com/github/zthxxx/react-dev-inspector/tree/dev/examples/vite4
                 *   - change: remove `references` field in `tsconfig.json`
                 */
                project='edit/github-x3rkzl'
                openFile='package.json,vite.config.ts%3AL17'
                view='default'
              />
            </Feature>

            <Feature
              large
              id='working-pipeline'
              href='/docs#how-it-works'
              className='flex flex-col justify-start'
            >
              <h3 className='grow-0'>The Working Pipeline</h3>
              <div
                className='grow flex justify-center items-center'
              >
                <Image
                  className='relative mt-2 sm:mt-4 lg:mt-6'
                  // https://www.figma.com/file/O5hlFMbYP9rGbFiI2BYjMj/React-Dev-Inspector
                  src={workingPipeline}
                  alt='Working Pipeline'
                  loading='eager'
                />
              </div>
            </Feature>

            <Feature>
              <h3>That's how it works</h3>
              <div>
                <S.Steps>
                  <h3>Inject JSX Source</h3>
                  <p>
                    The compiler's <code>plugin</code> records source path info into component's react fiber.
                  </p>

                  <h3>The Inspector Component</h3>
                  <p>
                    The <code>{`<Inspector/>`}</code> component reads the source info,
                    sends it to the dev-server when you inspect elements on browser.
                  </p>

                  <h3>Dev Server Middleware</h3>
                  <p>
                    The dev server <code>middleware</code> receives source path info from API,
                    then call your local IDE/Editor to open the source file.
                  </p>
                </S.Steps>
              </div>
            </Feature>

            <Feature>
              <h3>Try now, at once.</h3>
              <p>Yes, you can try the <code>react-dev-inspector</code> immediately on this page by the button below!</p>
              <p
                className='pt-2 lg:pt-8 flex justify-center lg:justify-start'
              >
                <S.InspectorButton
                  className='group'
                  onClick={() => setActive(true)}
                >
                  <span>Inspect now</span>
                  <S.ButtonIcon>🍭</S.ButtonIcon>
                </S.InspectorButton>
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
