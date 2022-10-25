import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { client } from '../apolloClient'
import '../public/animations.css'
import { theme } from '../src/common/theme'
import { globalStyles } from '../src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gastronauts</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/android-chrome-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/mstile-150x150.png"
        />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles(theme)} />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
