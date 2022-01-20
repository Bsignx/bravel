import { NextPage } from 'next'

import { PageProps, withAuth } from '@utils/route'

const Test: NextPage<PageProps> = ({ auth }) => {
  const { user } = auth
  return <div>with auth {user?.email}</div>
}

export default withAuth(Test)
