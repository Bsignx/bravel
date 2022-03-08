import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@bsignx/bravel-ui'
import { BravelLogo } from '@components/bravel-logo'
import { Container } from '@components/container'
import { Globe } from '@styled-icons/bootstrap/Globe'
import { Menu as MenuIcon } from '@styled-icons/heroicons-outline/Menu'
import { LocaleSwitcher } from 'features/translate/locale-switcher'

export const LandingMenu = () => {
  const { t } = useTranslation('landing-page')

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container as="header" className="mb-16 flex flex-wrap pt-6">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between rounded py-3">
          <div className="container flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div className="relative flex w-full items-center justify-between lg:static lg:block lg:w-auto lg:justify-start">
              <Link href="/landing">
                <a>
                  <BravelLogo />
                </a>
              </Link>
              <button
                className="text-white border-transparent bg-transparent cursor-pointer py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MenuIcon size={36} color="#F9FAFB" />
              </button>
            </div>
            <div
              className={
                'flex-grow items-center lg:flex' +
                (menuOpen ? ' flex' : ' hidden')
              }
            >
              <ul className="mt-4 flex w-full list-none flex-col place-items-center lg:mt-0 lg:!flex-row lg:place-items-end">
                <li>
                  <LocaleSwitcher>
                    <Button
                      variant="tertiary"
                      plain
                      icon={<Globe size={20} />}
                      className="mr-2 w-32"
                    >
                      {t('translate-button')}
                    </Button>
                  </LocaleSwitcher>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <Button variant="primary" plain className="mr-2 w-24">
                        {t('login-button')}
                      </Button>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <Button variant="tertiary" className="w-24">
                        {t('signup-button')}
                      </Button>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  )
}
