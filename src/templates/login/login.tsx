import { AuthContextType } from 'features/auth/auth-context'

type LoginTemplateProps = {
  auth: AuthContextType
}

export const LoginTemplate = ({ auth }: LoginTemplateProps) => {
  const { user, loginWithGoogle, error } = auth

  return (
    <main className="grid h-screen grid-cols-[minmax(31.25rem,_1fr)_2fr]">
      {/* {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1> */}
      <div className="h-full bg-gray900"></div>
      <div className="h-full bg-gray50"></div>
    </main>
  )
}
