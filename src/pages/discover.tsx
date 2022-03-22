import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { PageProps, withAuth } from 'features/auth/auth-route'
import { DiscoverTemplate } from 'templates/discover'

// update query and separate concerns

const getGroups = (): Promise<any[]> =>
  fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json').then(
    (resp) => resp.json()
  )

const Discover: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth
  const { data: groups } = useQuery('groups', getGroups, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return <DiscoverTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('groups', getGroups)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(Discover)
