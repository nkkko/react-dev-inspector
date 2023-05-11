import dynamic from 'next/dynamic'

const ShowPage = dynamic(
  () => import('@components/show-page').then(({ ShowPage }) => ShowPage),
  { ssr: false },
)

export default ShowPage
