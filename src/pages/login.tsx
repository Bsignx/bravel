import { NextPage } from 'next'

import { PageProps, withoutAuth } from 'features/auth/auth-route'
import { LoginTemplate } from 'templates/login'

const Login: NextPage<PageProps> = ({ auth }) => {
  return <LoginTemplate auth={auth} />
}

export default withoutAuth(Login)
