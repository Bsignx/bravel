import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageProps, withoutAuth } from 'features/auth/auth-route'
import { LoginTemplate } from 'templates/login'

const Login: NextPage<PageProps> = ({ auth }) => {
  return <LoginTemplate auth={auth} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['login-page'])),
    },
  }
}

export default withoutAuth(Login)
