import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'

import { HomeWelcomeSection } from './home-welcome-section'

export const HomeTemplate = () => {
  return (
    <main className="flex min-h-full flex-auto flex-col bg-gray50">
      <Navbar />
      <HomeWelcomeSection />
      <Footer />
    </main>
  )
}
