import React, { ReactNode, useEffect, useState } from 'react'

import { useAuth } from '@contexts/auth'
import AuthService from '@services/auth'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthStateChanged = ({ children }: AuthProviderProps) => {
  const { setUser } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AuthService.waitForUser((userCred) => {
      setUser(userCred)
      setLoading(false)
    })
  }, [setUser])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <>{children}</>
}
