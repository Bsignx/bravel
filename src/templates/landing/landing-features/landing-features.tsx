import { useTranslation } from 'react-i18next'

import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { FindAnEventIllustration } from '@components/illustrations/find-an-event'
import { JoinAGroupIllustration } from '@components/illustrations/join-a-group'
import { StartAGroupIllustration } from '@components/illustrations/start-a-group'
import { animateOpacityVariant } from '@constants/index'
import { motion } from 'framer-motion'

export const LandingFeatures = () => {
  const { t } = useTranslation('landing-page')

  const features = [
    {
      title: t('features_1_title'),
      description: t('features_1_description'),
      image: <JoinAGroupIllustration aria-label={t('features_1_title')} />,
    },
    {
      title: t('features_2_title'),
      description: t('features_2_description'),
      image: <FindAnEventIllustration aria-label={t('features_2_title')} />,
    },
    {
      title: t('features_3_title'),
      description: t('features_3_description'),
      image: <StartAGroupIllustration aria-label={t('features_3_title')} />,
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
      <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-3">
        {features.map(
          ({ title, description, image, className = '' }, index) => (
            <motion.div
              key={title}
              className={className}
              variants={animateOpacityVariant}
              initial="hidden"
              animate="visible"
              custom={{
                delay: 0.3 * index,
              }}
            >
              {image}
              <Typography variant="subheading" color="light" className="mt-4">
                {title}
              </Typography>
              <Typography variant="body2" color="light" className="mt-2">
                {description}
              </Typography>
            </motion.div>
          )
        )}
      </div>
    </Container>
  )
}
