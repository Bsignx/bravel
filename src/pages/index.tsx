import type { NextPage } from 'next'
import { useState } from 'react'

import { ToggleSwitch } from '@bsignx/bravel-ui'
import { strings } from '@translations/index'

const Home: NextPage = () => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ToggleSwitch
        enabled={checked}
        onChange={(value: boolean) => setChecked(value)}
      />
      {strings.test}
    </>
  )
}

export default Home
