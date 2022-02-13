import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import '../configs/firebase-config'
import { AuthProvider } from 'features/auth/auth-context'
import { AuthStateChanged } from 'features/auth/auth-state-changed'

import '../styles/globals.css'
import '@bsignx/bravel-ui/dist/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default appWithTranslation(MyApp)
