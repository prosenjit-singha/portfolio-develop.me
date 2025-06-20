'use client'

import * as signalR from '@microsoft/signalr'
import { createContext, useContext } from 'react'

export type SignalRContextType = {
  sendLocation: (data: { userName: string; lat: number; lon: number }) => void
  connection: signalR.HubConnection | null
  status: 'disconnected' | 'connecting' | 'connected' | 'reconnecting'
}

export const SignalRContext = createContext<SignalRContextType>({} as SignalRContextType)

export function useSignalR() {
  const context = useContext(SignalRContext)
  if (!context) throw new Error('useSignalR must be used inside <SignalRProvider>')
  return context
}
