import type { AppProps } from 'next/app'

import '../configs/firebase-config'
import { AuthProvider } from 'contexts/auth'
import { AuthStateChanged } from 'layout/auth-state-changed'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp
