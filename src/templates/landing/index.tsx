import { LandingFeatures } from '@components/landing-features'
import { LandingFooter } from '@components/landing-footer'
import { LandingGroupsCategories } from '@components/landing-groups-categories'
import { LandingHero } from '@components/landing-hero'
import { LandingMenu } from '@components/landing-menu'

export const LandingTemplate = () => {
  return (
    <div className="flex min-h-full flex-auto flex-col bg-gray900">
      <LandingMenu />
      <LandingHero />
      <LandingFeatures />
      <LandingGroupsCategories />
      <LandingFooter />
    </div>
  )
}
