'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import ReactQueryProvider from './react-query.provider'
import SignalRProvider from './signalr.provider'
import { ToastContainer } from 'react-toastify'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

const Providers = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return (
    <NextThemesProvider attribute="class" themes={['light', 'dark']}>
      <ReactQueryProvider>
        <SignalRProvider>{children}</SignalRProvider>
      </ReactQueryProvider>
      <ToastContainer />
    </NextThemesProvider>
  )
}

export default Providers
