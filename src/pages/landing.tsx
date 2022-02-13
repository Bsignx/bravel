import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LandingTemplate } from 'templates/landing'

const Landing: NextPage = () => {
  return <LandingTemplate />
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landing'])),
      // Will be passed to the page component as props
    },
  }
}

export default Landing
