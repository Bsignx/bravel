import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, useQuery, QueryClient } from 'react-query'

import { Categories } from '@domain/index'
import { getCategories } from '@services/http-resources'
import { PageProps, withAuth } from 'features/auth/auth-route'
import { NewGroupTemplate } from 'templates/new-group'

const NewGroup: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth
  const { data: categories } = useQuery<Categories>(
    'categories',
    () => getCategories(),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  )

  return <NewGroupTemplate categories={categories} />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('profile', getCategories)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(NewGroup)
