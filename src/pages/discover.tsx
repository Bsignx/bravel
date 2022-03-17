import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageProps, withAuth } from 'features/auth/auth-route'
import { DiscoverTemplate } from 'templates/discover'

const Discover: NextPage<PageProps> = ({ auth }) => {
  const { user, logout } = auth

  return <DiscoverTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(Discover)
