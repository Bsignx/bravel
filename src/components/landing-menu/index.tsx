import { useTranslation } from 'react-i18next'

import { Button } from '@bsignx/bravel-ui'
import { BravelLogo } from '@components/bravel-logo'
import { Container } from '@components/container'
import { Globe } from '@styled-icons/bootstrap/Globe'
import { LocaleSwitcher } from 'features/translate/locale-switcher'

export const LandingMenu = () => {
  const { t } = useTranslation('landing')

  return (
    <Container className="flex justify-between pt-6">
      <BravelLogo />
      <div className="flex">
        <LocaleSwitcher>
          <Button
            variant="tertiary"
            plain
            icon={<Globe size={20} />}
            className="mr-2"
          >
            {t('hero_title')}
          </Button>
        </LocaleSwitcher>
        <nav>
          <Button variant="primary" plain className="mr-2">
            a
          </Button>
          <Button variant="tertiary">a</Button>
        </nav>
      </div>
    </Container>
  )
}
