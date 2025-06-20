'use client'

import configs from '@/configs'
import { SignalRContext, SignalRContextType } from '../context/signalr'
import * as signalR from '@microsoft/signalr'
import React from 'react'
import { toast } from 'react-toastify'

function SignalRProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = React.useState<SignalRContextType['status']>('disconnected')
  const isStarted = React.useRef(false)
  const connection = React.useRef<signalR.HubConnection | null>(null)

  React.useEffect(() => {
    connection.current = new signalR.HubConnectionBuilder()
      .withUrl(configs.signalR.url)
      .withAutomaticReconnect()
      .build()
    if (
      connection.current?.state === signalR.HubConnectionState.Disconnected &&
      !isStarted.current
    ) {
      setStatus('connecting')
      isStarted.current = true

      connection.current
        ?.start()
        .then(() => {
          setStatus('connected')
          console.log('✅ SignalR connected')
        })
        .catch(err => {
          console.error('❌ SignalR connection failed:', err)
          setStatus('disconnected')
        })

      connection.current?.onreconnecting(() => {
        setStatus('reconnecting')
      })

      connection.current?.onreconnected(() => {
        setStatus('connected')
      })

      connection.current?.onclose(() => {
        setStatus('disconnected')
        isStarted.current = false
      })
    }
  }, [])

  const sendLocation = async (data: { userName: string; lat: number; lon: number }) => {
    connection.current
      ?.invoke('SendLatLon', data.lat, data.lon, data.userName)
      .then(result => {
        toast.success('Location Information Sent!')
        console.log('✅ SignalR Invoke: SendLatLon success', result)
      })
      .catch(error => {
        toast.error('Failed to send location information!')
        console.error('❌ SignalR Invoke: SendLatLon failed', error)
      })
  }

  return (
    <SignalRContext.Provider value={{ sendLocation, connection: connection.current, status }}>
      {children}
    </SignalRContext.Provider>
  )
}

export default SignalRProvider
