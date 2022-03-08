import {
  LandingMenu,
  LandingHero,
  LandingGroupsCategories,
  LandingFooter,
  LandingFeatures,
} from './'

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
