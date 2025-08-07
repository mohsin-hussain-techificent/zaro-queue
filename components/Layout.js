import Head from 'next/head'
import FloatingVoiceButton from './FloatingVoiceButton'

export default function Layout({ children, title = 'Pixel Pier NYC' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A design and strategy studio born in New York that creates visual stories that resonate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo-symbol.svg" />
      </Head>

      <main>
        {children}
        <FloatingVoiceButton />
      </main>
    </>
  )
} 