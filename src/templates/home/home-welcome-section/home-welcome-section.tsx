import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import {
  EventCalendarIllustration,
  JoinMarkerIllustration,
} from '@components/illustrations'

import { FeatureItem } from './feature-item'

const FEATURE_ITEMS = [
  {
    title: 'Find events',
    description: 'Events are happening on just about any topic you can think',
    icon: <EventCalendarIllustration />,
    button: {
      text: 'Discover events',
      url: '/events',
    },
  },
  {
    title: 'Join groups',
    description: 'Meet new people who share your interests through training',
    icon: <JoinMarkerIllustration />,
    button: {
      text: 'Join groups',
      url: '/groups',
    },
  },
]

export const HomeWelcomeSection = () => {
  return (
    <Container className="mb-16 md:mb-24 lg:mb-32">
      <Typography variant="h3" className="max-w-sm">
        It’s good to see you again, Ana!
      </Typography>
      <nav className="mt-12 flex flex-wrap first:mr-9 md:flex-nowrap">
        {FEATURE_ITEMS.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </nav>
    </Container>
  )
}
