import { useState } from 'react'

import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { OpacityAnimateContainer } from '@components/opacity-animate-container'
import { Groups } from '@domain/index'

import { DiscoverTabs } from './discover-tabs'
import { GroupsContent } from './groups-content'

const TABS_TITLE = ['Groups', 'Events']

type DiscoverTemplateProps = {
  groups: Groups | undefined
}

export const DiscoverTemplate = ({ groups }: DiscoverTemplateProps) => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <OpacityAnimateContainer>
      <Layout>
        <Container className="min-h-[42.8vh] pb-28">
          <DiscoverTabs
            tabsTitle={TABS_TITLE}
            activeTab={{
              openTab,
              setOpenTab,
            }}
          >
            <section className={openTab === 1 ? 'block' : 'hidden'} id="link1">
              {!!groups && <GroupsContent groups={groups} />}
            </section>
            <section className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              <p>todo</p>
            </section>
          </DiscoverTabs>
        </Container>
      </Layout>
    </OpacityAnimateContainer>
  )
}
