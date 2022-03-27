import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { Groups } from '@domain/index'
import { getGroups } from '@services/http-resources'
import { PageProps, withAuth } from 'features/auth/auth-route'
import { DiscoverTemplate } from 'templates/discover'

const Discover: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth
  const { data: groups } = useQuery<Groups>('groups', getGroups, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return <DiscoverTemplate groups={groups} />
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
