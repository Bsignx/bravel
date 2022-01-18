import type { NextPage } from 'next'

import { Thing } from '@bsignx/bravel-ui'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Thing />
    </>
  )
}

export default Home
