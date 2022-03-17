import { Layout } from '@components/layout'

import { HomeWelcomeSection } from './home-welcome-section'

export const HomeTemplate = () => {
  return (
    <div className="flex min-h-full flex-auto flex-col bg-gray50">
      <Layout>
        <HomeWelcomeSection />
      </Layout>
    </div>
  )
}
