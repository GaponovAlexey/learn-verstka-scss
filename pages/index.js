import Headers from '../src/components/Header'
import Head from 'next/head'
import { GoogleFonts } from 'next-google-fonts'

export default function Home() {
  return (
    <>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap' />
      <Head></Head>
      <Headers />
    </>
  )
}
