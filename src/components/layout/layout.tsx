import { ReactNode } from 'react'

import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
