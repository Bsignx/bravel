import { ComponentProps, ReactNode } from 'react'

import { cls } from '@utils/helpers/cls'

type ContainerProps = {
  children: ReactNode
  className?: string
} & ComponentProps<'div'>

export const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => (
  <div
    className={cls(
      `
        container mx-auto
        ${className}
      `
    )}
    {...props}
  >
    {children}
  </div>
)
