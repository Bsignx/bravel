import { useTranslation } from 'react-i18next'

import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { FindAnEventIllustration } from '@components/illustrations/find-an-event'
import { JoinAGroupIllustration } from '@components/illustrations/join-a-group'
import { StartAGroupIllustration } from '@components/illustrations/start-a-group'

export const LandingFeatures = () => {
  const { t } = useTranslation('landing-page')

  const features = [
    {
      title: t('features_1_title'),
      description: t('features_1_description'),
      image: <JoinAGroupIllustration />,
    },
    {
      title: t('features_2_title'),
      description: t('features_2_description'),
      image: <FindAnEventIllustration />,
    },
    {
      title: t('features_3_title'),
      description: t('features_3_description'),
      image: <StartAGroupIllustration />,
      className: 'mt-7',
    },
  ]

  return (
    <Container as="section" className="mb-20">
      <Typography variant="h3" color="light">
        {t('features_title')}
      </Typography>
      <Typography variant="body2" color="light" className="mt-4">
        {t('features_subtitle')}
      </Typography>
      <div className="mt-8 grid grid-cols-3 gap-14">
        {features.map(({ title, description, image, className = '' }) => (
          <div key={title} className={className}>
            {image}
            <Typography variant="subheading" color="light" className="mt-4">
              {title}
            </Typography>
            <Typography variant="body2" color="light" className="mt-2">
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  )
}
