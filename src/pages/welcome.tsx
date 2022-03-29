import type { NextPage, GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { Profile as ProfileType } from '@domain/index'
import { PageProps, withAuth } from '@features/auth'
import { getProfile } from '@services/http-resources'
import { HomeTemplate } from 'templates/home'

const Welcome: NextPage<PageProps> = () => {
  const { data: profile } = useQuery<ProfileType>('groups', getProfile, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return <HomeTemplate profile={profile} />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('profile', getProfile)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(Welcome)
