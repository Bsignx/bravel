import { useState } from 'react'

import { Button, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import {
  MapMarkerIcon,
  OrganizedByIcon,
  PeopleIcon,
  StarIcon,
} from '@components/icons'
import { Layout } from '@components/layout'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'

import { GroupTabs } from './group-tabs'

export const GroupTemplate = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <Layout>
      <Container as="main">
        <div className="flex flex-col md:!flex-row">
          <div className="h-52 max-w-full overflow-hidden rounded md:h-72 md:max-w-lg  lg:h-80 lg:max-w-2xl  ">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="group image"
              className="w-full"
            />
          </div>
          <div className="mt-4 w-full md:mt-0 md:ml-6 lg:ml-9">
            <Typography variant="h3">Sport Group</Typography>
            <ul className="mt-4">
              <li className="flex items-center">
                <MapMarkerIcon aria-hidden className="mr-3" />
                <div>
                  <Typography variant="body2">16 miles</Typography>
                  <Typography
                    variant="body2"
                    className="font-medium underline hover:opacity-50 hover:transition-opacity"
                  >
                    <a href="#">Show on the map</a>
                  </Typography>
                </div>
              </li>
              <li className="mt-4 flex items-center">
                <PeopleIcon aria-hidden className="mr-3" />
                <Typography variant="body2">13 members</Typography>
              </li>
              <li className="mt-4 flex items-center">
                <OrganizedByIcon aria-hidden className="mr-3" />
                <Typography variant="body2">
                  Organized by Bruno Mariano
                </Typography>
              </li>
            </ul>

            <div className="mt-14">
              <Typography variant="body2" className="font-medium">
                Share:
                <a
                  href="#"
                  title="Facebook"
                  className="ml-2 mr-2 text-gray700 hover:opacity-50 hover:transition-opacity"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  title="Instagram"
                  className="mr-2 text-gray700 hover:opacity-50 hover:transition-opacity"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  title="Whatsapp"
                  className="text-gray700 hover:opacity-50 hover:transition-opacity"
                >
                  <Whatsapp size={24} />
                </a>
              </Typography>
            </div>
          </div>
        </div>
        <div className="my-6 h-px w-full bg-stroke" aria-hidden />
        <div className="mb-16 flex flex-col-reverse md:mb-32 md:flex-row">
          <GroupTabs
            tabsTitle={['About', 'Events', 'Members']}
            activeTab={{
              openTab,
              setOpenTab,
            }}
          >
            <section className={openTab === 1 ? 'block' : 'hidden'} id="link1">
              <Typography variant="subheading" className="mb-4 font-medium">
                What we&apos;re about
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </section>
            <section className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              <p>todo</p>
            </section>
            <section className={openTab === 3 ? 'block' : 'hidden'} id="link2">
              <p>todo</p>
            </section>
          </GroupTabs>
          <div className="mb-6 flex items-center self-start md:mb-0 md:ml-8">
            <Button className="mr-6 w-52">Join this group</Button>
            <button className="flex items-center font-medium hover:opacity-50 hover:transition-opacity">
              <StarIcon aria-hidden className="mr-2" />
              Add to favorites
            </button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
