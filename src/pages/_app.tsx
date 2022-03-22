import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import '../configs/firebase-config'
import { AuthProvider } from 'features/auth/auth-context'
import { AuthStateChanged } from 'features/auth/auth-state-changed'

import '../styles/globals.css'
import '@bsignx/bravel-ui/dist/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <AuthProvider>
      <AuthStateChanged>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default appWithTranslation(MyApp)
