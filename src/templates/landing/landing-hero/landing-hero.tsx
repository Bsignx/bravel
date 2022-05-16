import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, TextField, Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { HeroIllustration } from '@components/illustrations/hero'
import { animateOpacityVariant } from '@constants/index'
import { Search } from '@styled-icons/bootstrap/Search'
import { motion } from 'framer-motion'

export const LandingHero = () => {
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation('landing-page')
  const { push } = useRouter()

  function handleSearchTextSubmit() {
    if (searchText) {
      push(`/discover?search=${searchText}`)
    }
  }

  const handleSearchTextChange = (value: string) => {
    setSearchText(value)
  }

  return (
    <Container as="section" className="mb-20 flex items-center justify-between">
      <motion.div
        variants={animateOpacityVariant}
        initial="hidden"
        animate="visible"
        className="max-w-lg lg:mr-11"
        custom={{
          delay: 0.3,
        }}
      >
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
            value={searchText}
            onInputChange={handleSearchTextChange}
          />
          <Button
            variant="primary"
            className="!rounded-l-none !bg-gray700 "
            icon={<Search size={20} color="#F9FAFB" />}
            onClick={handleSearchTextSubmit}
          />
        </div>
      </motion.div>
      <motion.div
        variants={animateOpacityVariant}
        initial="hidden"
        animate="visible"
        className="hidden w-full lg:block"
        custom={{
          delay: 0.5,
        }}
      >
        {' '}
        <HeroIllustration className="w-full" />
      </motion.div>
    </Container>
  )
}
