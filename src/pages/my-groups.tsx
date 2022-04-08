import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { getMyGroups, MyGroups as MyGroupType } from '@services/http-resources'
import { PageProps, withAuth } from 'features/auth/auth-route'
import { MyGroupsTemplate } from 'templates/my-groups'

const MyGroups: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth
  const { data: myGroups } = useQuery<MyGroupType>('groups', getMyGroups, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  return <MyGroupsTemplate myGroups={myGroups} />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('mygroups', getMyGroups)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(MyGroups)
