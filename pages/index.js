import Headers from '../src/components/Header'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
    
      </Head>
      <Headers />
    </div>
  )
}
