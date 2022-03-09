import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { cls } from '@utils/helpers/cls'

type ContainerOwnProp<E extends ElementType> = {
  children: ReactNode
  className?: string
  as?: E
}

type ContainerProps<E extends ElementType> = ContainerOwnProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ContainerOwnProp<E>>

export const Container = <E extends ElementType = 'div'>({
  children,
  className = '',
  as,
  ...props
}: ContainerProps<E>) => {
  const Component = as || 'div'

  return (
    <Component
      className={cls(
        `
        container
        mx-auto
        px-4
        sm:px-2
        ${className}
      `
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
