import { Layout } from '@components/layout'
import { Profile } from '@domain/index'

import { HomeWelcomeSection } from './home-welcome-section'

type ProfileTemplateProps = {
  profile: Profile | undefined
}

export const HomeTemplate = ({ profile }: ProfileTemplateProps) => {
  if (!profile) return null

  return (
    <Layout>
      <HomeWelcomeSection profile={profile} />
    </Layout>
  )
}
