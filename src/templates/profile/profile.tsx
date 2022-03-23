import { Button, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'

export const ProfileTemplate = () => {
  return (
    <Layout>
      <Container as="main" className="flex min-h-[43vh] justify-center">
        <section className="mb-32 flex">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/52089507?v=4"
              className="w-32 rounded-full"
              alt="Avatar"
            />
          </div>

          <div className="ml-9">
            <Typography variant="h3" className="font-medium !text-gray700">
              Bruno Mariano
            </Typography>
            <Typography
              variant="body2"
              className="mt-1 font-medium !text-gray500"
            >
              Member since January 2021
            </Typography>
            <Typography variant="body2" className="mt-4 !text-gray700">
              Barretos
            </Typography>
            <Typography variant="body2" className="!text-gray700">
              Attended 0 Events
            </Typography>
            <Typography variant="body2" className="!text-gray700">
              Participate in 6 groups
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
