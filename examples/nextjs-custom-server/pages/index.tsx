import dynamic from 'next/dynamic'
import Head from 'next/head'

const HomePage = dynamic(
  () => import('../components/HomePage').then(({ HomePage }) => HomePage),
  { ssr: false },
)

export default function Layout() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='website demo for react-dev-inspector'
        />

        <title>React Dev Inspector | vite4 demo</title>
      </Head>

      <HomePage
        name={'nextjs-custom-server'}
        titleBadge={'Next.js 13'}
      />
    </>
  )
}
