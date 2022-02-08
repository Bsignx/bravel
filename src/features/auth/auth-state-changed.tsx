import React, { ReactNode, useEffect, useState } from 'react'

import AuthService from '@services/auth'
import { useAuth } from 'features/auth/auth-context'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthStateChanged = ({ children }: AuthProviderProps) => {
  const { setUser } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AuthService.waitForUser((userCredentials) => {
      setUser(userCredentials)
      setLoading(false)
    })
  }, [setUser])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <>{children}</>
}
