import type { NextPage, GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { HomeTemplate } from 'templates/home'

const Welcome: NextPage = () => {
  return <HomeTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default Welcome
