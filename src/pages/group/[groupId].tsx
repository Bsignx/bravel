import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { Group as GroupType, Profile as ProfileType } from '@domain/index'
import { getGroup, getProfile } from '@services/http-resources'
import { PageProps, withAuth } from 'features/auth/auth-route'
import { GroupTemplate } from 'templates/group'

type GroupProps = {
  groupId?: string
} & PageProps

const Group: NextPage<GroupProps> = ({ auth, groupId = '' }) => {
  const { data: group } = useQuery<GroupType>(
    ['groups', groupId],
    () => getGroup(groupId),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  )

  const { data: profile } = useQuery<ProfileType>('groups', getProfile, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  const { user, logout } = auth

  return <GroupTemplate group={group} profile={profile} />
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const { groupId } = params as { groupId: string }

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['groups', groupId], () => getGroup(groupId))
  await queryClient.prefetchQuery('profile', getProfile)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      groupId,
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(Group)
