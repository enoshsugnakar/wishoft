import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
      <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css"
        />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></Script>
      </body>
    </Html>
  )
}