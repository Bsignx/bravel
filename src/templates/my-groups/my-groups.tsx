import Link from 'next/link'

import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { MyGroups } from '@services/http-resources'

type MyGroupsTemplateProps = {
  myGroups: MyGroups | undefined
}

export const MyGroupsTemplate = ({ myGroups }: MyGroupsTemplateProps) => {
  if (!myGroups) {
    return null
  }
  console.log(myGroups)
  const { asMember, asOrganizer } = myGroups

  return (
    <Layout>
      <Container as="main" className="min-h-[42.8vh] pb-28">
        <Typography variant="h3" className="font-medium !text-gray700">
          Your groups
        </Typography>

        {!asMember?.length && !asMember?.length && (
          <Typography variant="body2" className="text-gray600 mt-6">
            You are not a member or organizer of any group. You can create a new
            group or join.
          </Typography>
        )}

        {asOrganizer?.length > 0 && (
          <>
            <Typography
              variant="body1"
              className="mt-9 mb-4 font-medium !text-gray700"
            >
              Organnizer
            </Typography>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {asOrganizer.map(({ id, image_url, name }) => (
                <li key={id}>
                  <Link href={`/group/${id}`}>
                    <a>
                      <div className="h-auto max-w-[180px] overflow-hidden rounded md:max-w-[256px]">
                        <img src={image_url} alt={name} />
                      </div>
                      <Typography
                        variant="body2"
                        className="mt-2 font-medium !text-gray500"
                      >
                        {name}
                      </Typography>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {asMember?.length > 0 && (
          <>
            <div className="my-6 h-px w-full bg-stroke" aria-hidden />
            <Typography
              variant="body1"
              className="mt-9 mb-4 font-medium !text-gray700"
            >
              Member
            </Typography>
            <ul className=" grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {asMember.map(({ id, image_url, name }) => (
                <li key={id}>
                  <Link href={`/group/${id}`}>
                    <a>
                      <div className="h-auto max-w-[180px] overflow-hidden rounded md:max-w-[256px]">
                        <img src={image_url} alt={name} />
                      </div>
                      <Typography
                        variant="body2"
                        className="mt-2 font-medium !text-gray500"
                      >
                        {name}
                      </Typography>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  )
}
