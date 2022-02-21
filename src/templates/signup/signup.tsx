import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button, Typography } from '@bsignx/bravel-ui'
import { SmallBravelLogo } from '@components/bravel-logo'
import { ChampionGroupIllustration } from '@components/illustrations'
import { AuthContextType } from 'features/auth/auth-context'

type SignupTemplateProps = {
  auth: AuthContextType
}

export const SignupTemplate = ({
  auth: { error, loginWithGoogle },
}: SignupTemplateProps) => {
  const { t } = useTranslation('signup-page')

  return (
    <main className="grid h-screen grid-cols-[minmax(31.25rem,_1fr)_2fr]">
      <div className="flex h-full flex-col place-items-center justify-center bg-gray900 px-16">
        <ChampionGroupIllustration aria-hidden />
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
      <div className="flex h-full flex-col place-content-center justify-center bg-gray50 px-44">
        <SmallBravelLogo aria-label={t('logo-label')} />
        <Typography
          variant="subheading"
          color="dark"
          className="mt-9 self-start font-medium"
        >
          {t('signup-title')}
        </Typography>
        <Typography variant="body2" color="dark" className="mt-3 self-start">
          {t('signup-subtitle')}
        </Typography>
        <Button
          className="mt-4"
          variant="secondary"
          icon={<img src="/images/google.png" aria-hidden />}
          onClick={loginWithGoogle}
        >
          {t('signup-button')}
        </Button>
        {!!error && (
          <p className="mt-2 text-xs font-medium text-rose500">
            {t('signup-error')}
          </p>
        )}
        <Typography variant="body2" color="dark" className="mt-4">
          {t('already-have-account')}{' '}
          <Link href="/login">
            <a className="underline hover:opacity-50 hover:transition-opacity">
              {t('login')}
            </a>
          </Link>
        </Typography>
      </div>
    </main>
  )
}
