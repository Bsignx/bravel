import { Button, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { Profile } from '@domain/index'

type ProfileTemplateProps = {
  profile: Profile | undefined
}

export const ProfileTemplate = ({ profile }: ProfileTemplateProps) => {
  if (!profile) return null

  const {
    name,
    url_avatar,
    location,
    attended_events,
    groups_as_member,
    created_at,
  } = profile

  return (
    <Layout>
      <Container as="main" className="flex min-h-[43vh] justify-center">
        <section className="mb-32 flex">
          <div>
            <img src={url_avatar} className="w-32 rounded-full" alt={name} />
          </div>

          <div className="ml-9">
            <Typography variant="h3" className="font-medium !text-gray700">
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="mt-1 font-medium !text-gray500"
            >
              Member since {new Date(created_at).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" className="mt-4 !text-gray700">
              {location}
            </Typography>
            <Typography variant="body2" className="!text-gray700">
              Attended {attended_events?.length} Event
              {attended_events?.length > 1 ? 's' : ''}
            </Typography>
            <Typography variant="body2" className="!text-gray700">
              Participate in {groups_as_member?.length} group
              {groups_as_member?.length > 1 ? 's' : ''}
            </Typography>
            <Button className="mt-6" disabled>
              Edit profile
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  )
}
