'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import ReactQueryProvider from './react-query.provider'

const Providers = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return (
    <NextThemesProvider attribute="class" themes={['light', 'dark']}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextThemesProvider>
  )
}

export default Providers
