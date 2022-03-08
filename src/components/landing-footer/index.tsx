import { useTranslation } from 'react-i18next'

import { Container } from '@components/container'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import { Youtube } from '@styled-icons/bootstrap/Youtube'

import { LinkList } from './links-list'
import { Typography } from '@bsignx/bravel-ui'

export const LandingFooter = () => {
  const { t } = useTranslation('landing-page')

  const links = [
    {
      title: t('footer.your_account.title'),
      subItems: [
        t('footer.your_account.sub_items.1'),
        t('footer.your_account.sub_items.2'),
      ],
    },
    {
      title: t('footer.discover.title'),
      subItems: [
        t('footer.discover.sub_items.1'),
        t('footer.discover.sub_items.2'),
      ],
    },
    {
      title: t('footer.bravel.title'),
      subItems: [t('footer.bravel.sub_items.1')],
    },
  ]

  const socialLinks = {
    title: t('footer.follow_us.title'),
    subItems: [
      {
        label: t('footer.follow_us.sub_items.1'),
        icon: (
          <Facebook
            size={24}
            aria-hidden="false"
            aria-label={t('footer.follow_us.sub_items.1')}
            color="#F9FAFB"
          />
        ),
      },
      {
        label: t('footer.follow_us.sub_items.2'),
        icon: (
          <Instagram
            size={24}
            aria-hidden="false"
            aria-label={t('footer.follow_us.sub_items.2')}
            color="#F9FAFB"
          />
        ),
      },
      {
        label: t('footer.follow_us.sub_items.3'),
        icon: (
          <Youtube
            size={24}
            aria-hidden="false"
            aria-label={t('footer.follow_us.sub_items.3')}
            color="#F9FAFB"
          />
        ),
      },
    ],
  }

  return (
    <div className="bg-gray700">
      <Container as="footer" className="py-11">
        <LinkList items={{ itemsList: links, socialItem: socialLinks }} />
        <Typography variant="body2" color="light" className="mt-6">
          {t('footer.rights_reserved')}
        </Typography>
      </Container>
    </div>
  )
}
