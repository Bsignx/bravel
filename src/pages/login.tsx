import { NextPage } from 'next'

import { useAuth } from 'contexts/auth'

const Login: NextPage = () => {
  const { user, loginWithGoogle, error } = useAuth()

  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1>
    </div>
  )
}

export default Login
