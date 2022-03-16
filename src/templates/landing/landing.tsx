import { Footer } from '@components/footer'

import {
  LandingNavbar,
  LandingHero,
  LandingGroupsCategories,
  LandingFeatures,
} from './'

export const LandingTemplate = () => {
  return (
    <div className="flex min-h-full flex-auto flex-col bg-gray900">
      <LandingNavbar />
      <LandingHero />
      <LandingFeatures />
      <LandingGroupsCategories />
      <Footer />
    </div>
  )
}
