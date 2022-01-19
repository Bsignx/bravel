import type { AppProps } from 'next/app'

import '../configs/firebase-config'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
