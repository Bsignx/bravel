import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button } from '@bsignx/bravel-ui'
import { BravelLogo } from '@components/bravel-logo'
import { Container } from '@components/container'
import { Globe } from '@styled-icons/bootstrap/Globe'
import { LocaleSwitcher } from 'features/translate/locale-switcher'

export const LandingMenu = () => {
  const { t } = useTranslation('landing-page')

  return (
    <Container as="header" className="mb-32 flex justify-between pt-6">
      <Link href="/landing">
        <a>
          <BravelLogo />
        </a>
      </Link>

      <div className="flex">
        <LocaleSwitcher>
          <Button
            variant="tertiary"
            plain
            icon={<Globe size={20} />}
            className="mr-2"
          >
            {t('translate-button')}
          </Button>
        </LocaleSwitcher>
        <nav>
          <Link href="/">
            <a>
              <Button variant="primary" plain className="mr-2">
                {t('login-button')}
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button variant="tertiary">{t('signup-button')}</Button>
            </a>
          </Link>
        </nav>
      </div>
    </Container>
  )
}
