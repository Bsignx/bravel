import { useTranslation } from 'react-i18next'

import { Icon, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'

export const LandingGroupsCategories = () => {
  const { t } = useTranslation('landing-page')

  const categories = [
    {
      name: t('group_categories.1'),
      icon: <Icon name="basketball" aria-hidden />,
    },
    {
      name: t('group_categories.2'),
      icon: <Icon name="soccer" aria-hidden />,
    },
    {
      name: t('group_categories.3'),
      icon: <Icon name="volleyball" aria-hidden />,
    },
    {
      name: t('group_categories.4'),
      icon: <Icon name="rugby" aria-hidden />,
    },
    {
      name: t('group_categories.5'),
      icon: <Icon name="esports" aria-hidden />,
    },
    {
      name: t('group_categories.6'),
      icon: <Icon name="mma" aria-hidden />,
    },
    {
      name: t('group_categories.7'),
      icon: <Icon name="tennis" aria-hidden />,
    },
    {
      name: t('group_categories.8'),
      icon: <Icon name="running" aria-hidden />,
    },
    {
      name: t('group_categories.9'),
      icon: <Icon name="golf" aria-hidden />,
    },
    {
      name: t('group_categories.10'),
      icon: <Icon name="bike" aria-hidden />,
    },
    {
      name: t('group_categories.11'),
      icon: <Icon name="yoga" aria-hidden />,
    },
    {
      name: t('group_categories.12'),
      icon: <Icon name="skateboard" aria-hidden />,
    },
  ]

  return (
    <Container as="section" className="mb-20">
      <Typography variant="h3" color="light">
        {t('group_categories_title')}
      </Typography>
      <Typography variant="body2" color="light" className="mt-4">
        {t('group_categories_subtitle')}
      </Typography>
      <div className="mt-8 grid grid-cols-2 grid-rows-3 gap-y-4 gap-x-11 lg:grid-cols-4">
        {categories.map(({ name, icon }) => (
          <div key={name} className="flex items-center">
            <div className="w-6">{icon}</div>

            <Typography variant="body1" color="light" className="ml-2">
              {name}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  )
}
