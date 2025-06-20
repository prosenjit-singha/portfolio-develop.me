'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return (
    <NextThemesProvider attribute="class" themes={['light', 'dark']}>
      {children}
    </NextThemesProvider>
  )
}

export default Providers
