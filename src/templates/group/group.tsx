import { useRouter } from 'next/router'
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
import { Group, Profile } from '@domain/index'
import { useUpdateGroup } from '@features/group/hooks/useUpdateGroup'
import { useUpdateUser } from '@features/user'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'

import { GroupTabs } from './group-tabs'

type GroupTemplateProps = {
  group: Group | undefined
  profile: Profile | undefined
}

export const GroupTemplate = ({ group, profile }: GroupTemplateProps) => {
  const [openTab, setOpenTab] = useState(1)

  const { mutateAsync: updateUser } = useUpdateUser()
  const { mutateAsync: updateGroup } = useUpdateGroup()
  const { push } = useRouter()

  if (!group || !profile) return null

  const {
    description,
    distance,
    name: groupName,
    members_number,
    organized_by,
    image_url,
    group_members,
    group_events,
    id: groupId,
  } = group

  const { groups_as_member } = profile

  const handleJoinGroup = async () => {
    const groupAsMember = [
      ...groups_as_member,
      {
        id: groupId,
        name: groupName,
      },
    ]

    const groupMembers = [
      ...group_members,
      {
        id: profile.id,
        name: profile.name,
      },
    ]

    try {
      await updateUser({
        groupAsMember,
      })
      await updateGroup({
        id: profile.id,
        groupMembers,
      })

      push('/my-groups')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Container as="main">
        <div className="flex flex-col md:!flex-row">
          <div className="h-52 max-w-full overflow-hidden rounded md:h-72 md:max-w-lg  lg:h-80 lg:max-w-2xl  ">
            <img src={image_url} alt="group image" className="w-full" />
          </div>
          <div className="mt-4 w-full md:mt-0 md:ml-6 lg:ml-9">
            <Typography variant="h3">{groupName}</Typography>
            <ul className="mt-4">
              <li className="flex items-center">
                <MapMarkerIcon aria-hidden className="mr-3" />
                <div>
                  <Typography variant="body2">{distance}</Typography>
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
                <Typography variant="body2">
                  {members_number} members
                </Typography>
              </li>
              <li className="mt-4 flex items-center">
                <OrganizedByIcon aria-hidden className="mr-3" />
                <Typography variant="body2">
                  Organized by {organized_by.name}
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
              <Typography variant="body2">{description}</Typography>
            </section>
            <section className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              {group_events ? (
                group_events.map((event) => (
                  <div key={event.id}>
                    <Typography variant="body2" className="mb-4 font-medium">
                      {event.name}
                    </Typography>
                  </div>
                ))
              ) : (
                <p>No events</p>
              )}
            </section>
            <section className={openTab === 3 ? 'block' : 'hidden'} id="link2">
              {group_members ? (
                group_members.map((member) => (
                  <div key={member.id}>
                    <Typography variant="body2" className="mb-4 font-medium">
                      {member.name}
                    </Typography>
                  </div>
                ))
              ) : (
                <p>No members</p>
              )}
            </section>
          </GroupTabs>
          <div className="mb-6 flex items-center self-start md:mb-0 md:ml-8">
            <Button className="mr-6 w-52" onClick={handleJoinGroup}>
              Join this group
            </Button>
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
