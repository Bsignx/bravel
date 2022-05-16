import { Layout } from '@components/layout'
import { OpacityAnimateContainer } from '@components/opacity-animate-container'
import { Profile } from '@domain/index'

import { HomeWelcomeSection } from './home-welcome-section'

type ProfileTemplateProps = {
  profile: Profile | undefined
}

export const HomeTemplate = ({ profile }: ProfileTemplateProps) => {
  if (!profile) return null

  return (
    <OpacityAnimateContainer>
      <Layout>
        <HomeWelcomeSection profile={profile} />
      </Layout>
    </OpacityAnimateContainer>
  )
}
