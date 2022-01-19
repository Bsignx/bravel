import { createContext, ReactNode, useContext, useState } from 'react'

import { User } from 'firebase/auth'

import AuthService from '../services/auth'

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextType = {
  user: User | null
  error: string | null
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState('')

  const loginWithGoogle = async () => {
    const { user, error } = await AuthService.loginWithGoogle()
    setUser(user)
    setError(error)
  }

  const logout = async () => {
    await AuthService.logout()
    setUser(null)
  }
  const value = { user, error, loginWithGoogle, logout, setUser }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
