import { useTranslation } from 'react-i18next'

import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import { Youtube } from '@styled-icons/bootstrap/Youtube'

import { LinkList } from './links-list'

export const Footer = () => {
  const { t } = useTranslation('landing-page')

  const links = [
    {
      title: t('footer.your_account.title'),
      subItems: [
        { text: t('footer.your_account.sub_items.1'), url: '/signup' },
        { text: t('footer.your_account.sub_items.2'), url: '/signin' },
      ],
    },
    {
      title: t('footer.discover.title'),
      subItems: [
        { text: t('footer.discover.sub_items.1'), url: '/discover' },
        // { text: t('footer.discover.sub_items.2'), url: '/' }, todo
      ],
    },
    {
      title: t('footer.bravel.title'),
      subItems: [{ text: t('footer.bravel.sub_items.1'), url: '/' }],
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
