import { useTranslation } from 'react-i18next'

import { Button, TextField, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { HeroIllustration } from '@components/illustrations/hero'
import { Search } from '@styled-icons/bootstrap/Search'

export const LandingHero = () => {
  const { t } = useTranslation('landing-page')

  return (
    <Container as="section" className="mb-20 flex items-center justify-between">
      <div className="mr-11 max-w-lg ">
        <Typography variant="h2" color="light" className="mb-4">
          {t('hero_title')}
        </Typography>
        <Typography variant="body2" color="light" className="mb-4">
          {t('hero_subtitle')}
        </Typography>
        <div className="flex items-center">
          <TextField
            placeholder={t('hero_input_placeholder')}
            inputClassName="!rounded-r-none !leading-5"
          />
          <Button
            variant="primary"
            className="!rounded-l-none !bg-gray700 "
            icon={<Search size={20} color="#F9FAFB" />}
          />
        </div>
      </div>
      <div>
        <HeroIllustration className="w-full" />
      </div>
    </Container>
  )
}
