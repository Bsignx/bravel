import Link from 'next/link'

import { Typography } from '@bsignx/bravel-ui'

type LinkListProps = {
  items: {
    itemsList: {
      title: string
      subItems: {
        text: string
        url: string
      }[]
    }[]
    socialItem: {
      title: string
      subItems: {
        label: string
        icon: JSX.Element
      }[]
    }
  }
}

export const LinkList = ({
  items: { itemsList, socialItem },
}: LinkListProps) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-16 lg:grid-cols-3 lg:gap-x-32">
    {itemsList.map(({ title, subItems }) => (
      <div key={title}>
        <Typography variant="subheading" color="light" className="mb-4">
          {title}
        </Typography>
        {subItems.map((subItem) => (
          <Link href={subItem.url} key={subItem.text}>
            <a>
              <Typography
                variant="body2"
                color="light"
                className="hover:opacity-50 hover:transition-opacity"
              >
                {subItem.text}
              </Typography>
            </a>
          </Link>
        ))}
      </div>
    ))}
    <div className="w-28">
      <Typography variant="subheading" color="light" className="mb-4">
        {socialItem.title}
      </Typography>
      <div className="grid grid-cols-3">
        {socialItem.subItems.map(({ icon, label }) => (
          <Link href="/" key={label}>
            <a className="hover:opacity-50 hover:transition-opacity">{icon}</a>
          </Link>
        ))}
      </div>
    </div>
  </div>
)
