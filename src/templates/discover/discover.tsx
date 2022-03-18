import { useState } from 'react'

import { Container } from '@components/container'
import { Layout } from '@components/layout'

import { DiscoverTabs } from './discover-tabs'
import { GroupsContent } from './groups-content'

const TABS_TITLE = ['Groups', 'Events']

export const DiscoverTemplate = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <Layout>
      <Container>
        <DiscoverTabs
          tabsTitle={TABS_TITLE}
          activeTab={{
            openTab,
            setOpenTab,
          }}
        >
          <section className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <GroupsContent />
          </section>
          <section className={openTab === 2 ? 'block' : 'hidden'} id="link2">
            <p>todo</p>
          </section>
        </DiscoverTabs>
      </Container>
    </Layout>
  )
}
