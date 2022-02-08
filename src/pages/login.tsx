import { NextPage } from 'next'

import { PageProps, withoutAuth } from 'features/auth/auth-route'

const Login: NextPage<PageProps> = ({ auth }) => {
  const { user, loginWithGoogle, error } = auth

  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1>
    </div>
  )
}

export default withoutAuth(Login)
