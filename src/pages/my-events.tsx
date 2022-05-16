import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { PageProps, withAuth } from 'features/auth/auth-route'

const MyEvents: NextPage<PageProps> = () => {
  return (
    <Layout>
      <Container className="min-h-[42.8vh] pb-28">Todo</Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default withAuth(MyEvents)
