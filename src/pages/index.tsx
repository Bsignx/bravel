import type { NextPage, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LandingTemplate } from 'templates/landing'

const Landing: NextPage = () => {
  return <LandingTemplate />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['landing-page'])),
    },
  }
}

export default Landing
