import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'

const GROUPS_MEMBER = [
  {
    id: '1',
    name: 'Group 1',
    description: 'Group 1 description',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Group 2',
    description: 'Group 2 description',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Group 2',
    description: 'Group 2 description',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Group 2',
    description: 'Group 2 description',
    image:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]

const GROUPS_ORGANNIZER = [
  {
    id: '1',
    name: 'Group 1',
    description: 'Group 1 description',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Group 2',
    description: 'Group 2 description',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]

export const MyGroupsTemplate = () => {
  return (
    <Layout>
      <Container as="main">
        <Typography variant="h3" className="font-medium !text-gray700">
          Your groups
        </Typography>
        <Typography
          variant="body1"
          className="mt-9 mb-4 font-medium !text-gray700"
        >
          Organnizer
        </Typography>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {GROUPS_ORGANNIZER.map(({ id, image, name }) => (
            <li key={id}>
              <a href="#">
                <div className="h-auto max-w-[180px] overflow-hidden rounded md:max-w-[256px]">
                  <img src={image} alt={name} />
                </div>
                <Typography
                  variant="body2"
                  className="mt-2 font-medium !text-gray500"
                >
                  {name}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
        <div className="my-6 h-px w-full bg-stroke" aria-hidden />
        <Typography
          variant="body1"
          className="mt-9 mb-4 font-medium !text-gray700"
        >
          Member
        </Typography>
        <ul className="mb-32 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {GROUPS_MEMBER.map(({ id, image, name }) => (
            <li key={id}>
              <a href="#">
                <div className="h-auto max-w-[180px] overflow-hidden rounded md:max-w-[256px]">
                  <img src={image} alt={name} />
                </div>
                <Typography
                  variant="body2"
                  className="mt-2 font-medium !text-gray500"
                >
                  {name}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
