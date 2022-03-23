import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageProps, withAuth } from 'features/auth/auth-route'
import { ProfileTemplate } from 'templates/profile'

const Profile: NextPage<PageProps> = () => {
  return <ProfileTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(Profile)
