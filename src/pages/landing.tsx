import type { NextPage } from 'next'

import { strings } from '@translations/index'

const Landing: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {strings.test}
    </>
  )
}

export default Landing
