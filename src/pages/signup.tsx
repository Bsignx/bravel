import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageProps, withoutAuth } from 'features/auth/auth-route'
import { SignupTemplate } from 'templates/signup'

const Signup: NextPage<PageProps> = ({ auth }) => {
  return <SignupTemplate auth={auth} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['signup-page'])),
    },
  }
}

export default withoutAuth(Signup)
