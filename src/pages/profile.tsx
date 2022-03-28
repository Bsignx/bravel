import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { Profile as ProfileType } from '@domain/index'
import { getProfile } from '@services/http-resources'
import { PageProps, withAuth } from 'features/auth/auth-route'
import { ProfileTemplate } from 'templates/profile'

const Profile: NextPage<PageProps> = () => {
  const { data: profile } = useQuery<ProfileType>('groups', getProfile, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return <ProfileTemplate profile={profile} />
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

export default withAuth(Profile)
