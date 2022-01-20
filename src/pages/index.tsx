import type { NextPage } from 'next'

import { Thing } from '@bsignx/bravel-ui'
import { strings } from '@translations/index'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Thing />
      {strings.test}
    </>
  )
}

export default Home
