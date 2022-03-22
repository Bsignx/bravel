import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageProps, withAuth } from 'features/auth/auth-route'
import { MyGroupsTemplate } from 'templates/my-groups'

const MyGroups: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth

  return <MyGroupsTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(MyGroups)
