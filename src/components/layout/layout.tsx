import { ReactNode } from 'react'

import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-full flex-auto flex-col bg-gray50">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
