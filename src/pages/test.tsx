import { NextPage } from 'next'

import { PageProps, withAuth } from '@utils/route'

const Test: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth
  return (
    <div>
      with auth {user?.email}
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default withAuth(Test)
