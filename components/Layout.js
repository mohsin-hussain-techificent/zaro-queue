import Head from 'next/head'
import FloatingVoiceButton from './FloatingVoiceButton'
import { VoiceProvider } from './VoiceContext'

export default function Layout({ children, title = 'Pixel Pier NYC' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A design and strategy studio born in New York that creates visual stories that resonate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo-symbol.svg" />
        <script src="https://cdn.elevenlabs.io/elevenlabs.js" async></script>
      </Head>

      <VoiceProvider>
        <main>
          {children}
          <FloatingVoiceButton />
        </main>
      </VoiceProvider>
    </>
  )
} 