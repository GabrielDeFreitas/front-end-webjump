import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desafio Front-end | WebJump</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Desafio Front-end da WebJump utilizando Typescript, React, NextJS e Styled Components."
        />
      </Head>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
