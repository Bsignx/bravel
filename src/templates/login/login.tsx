import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button, Typography } from '@bsignx/bravel-ui'
import { SmallBravelLogo } from '@components/bravel-logo'
import { BasketGroupIllustration } from '@components/illustrations'
import { AuthContextType } from 'features/auth/auth-context'

type LoginTemplateProps = {
  auth: AuthContextType
}

export const LoginTemplate = ({
  auth: { error, loginWithGoogle },
}: LoginTemplateProps) => {
  const { t } = useTranslation('login-page')

  return (
    <main className="grid h-screen lg:grid-cols-[minmax(31.25rem,_1fr)_2fr]">
      <div className="hidden h-full flex-col place-items-center justify-center bg-gray900 px-16 lg:flex">
        <BasketGroupIllustration aria-hidden />
        <Typography variant="h3" color="light" className="mt-12 self-start">
          {t('main-title')}
        </Typography>
        <Typography
          variant="body2"
          color="light"
          className="
        mt-4 self-start"
        >
          {t('main-subtitle')}
        </Typography>
      </div>
      <div className="flex h-full flex-col place-content-center justify-center bg-gray50 px-8 md:px-32">
        <SmallBravelLogo aria-label={t('logo-label')} />
        <Typography
          variant="subheading"
          color="dark"
          className="mt-9 self-start font-medium"
        >
          {t('login-title')}
        </Typography>
        <Typography variant="body2" color="dark" className="mt-3 self-start">
          {t('login-subtitle')}
        </Typography>
        <Button
          className="mt-4"
          variant="secondary"
          icon={<img src="/images/google.png" aria-hidden />}
          onClick={loginWithGoogle}
        >
          {t('login-button')}
        </Button>
        {!!error && (
          <p className="mt-2 text-xs font-medium text-rose500">
            {t('login-error')}
          </p>
        )}
        <Typography variant="body2" color="dark" className="mt-4">
          {t('not-registered')}{' '}
          <Link href="/signup">
            <a className="underline">{t('create-account')}</a>
          </Link>
        </Typography>
      </div>
    </main>
  )
}
