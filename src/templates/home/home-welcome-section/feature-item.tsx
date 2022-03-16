import Link from 'next/link'
import { ReactNode } from 'react'

import { Button, Typography } from '@bsignx/bravel-ui'

type FeatureItemProps = {
  title: string
  description: string
  icon: ReactNode
  button: {
    text: string
    url: string
  }
}

export const FeatureItem = ({
  button,
  description,
  icon,
  title,
}: FeatureItemProps) => {
  return (
    <div className="bg-white flex rounded p-6 shadow-md first:mb-8 md:first:mr-9 md:first:mb-0">
      {icon}
      <div className="ml-4">
        <Typography variant="subheading" className="font-medium">
          {title}
        </Typography>
        <Typography variant="body2" className="mt-2 mb-8">
          {description}
        </Typography>
        <Link href={button.url}>
          <a>
            <Button fullWidth>{button.text}</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}
