import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script 
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              import { Conversation } from "https://cdn.skypack.dev/@11labs/client";
              window.ElevenLabs = { Conversation };
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 