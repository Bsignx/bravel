import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import { AuthContextType, useAuth } from 'features/auth/auth-context'

export type PageProps = { auth: AuthContextType }

export const withoutAuth = (page: NextPage<PageProps>) =>
  function WithoutAuth(props: unknown) {
    const Page = page
    const auth = useAuth()
    const router = useRouter()

    if (auth.user) {
      router.replace('/discover')
      return <h1>Loading...</h1>
    }
    return <Page auth={auth} {...props} />
  }

export const withAuth = (page: NextPage<PageProps>) =>
  function WithAuth(props: unknown) {
    const Page = page
    const auth = useAuth()
    const router = useRouter()

    if (!auth.user) {
      router.replace('/login')
      return <h1>Loading...</h1>
    }
    return <Page auth={auth} {...props} />
  }
