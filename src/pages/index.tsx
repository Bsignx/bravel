import type { NextPage, GetServerSideProps } from 'next'

import { HomeTemplate } from 'templates/home'

const Home: NextPage = () => {
  return <HomeTemplate />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Home
