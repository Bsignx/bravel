import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation('landing')

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {t('hero_title')}
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landing'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
