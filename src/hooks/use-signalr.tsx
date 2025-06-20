// hooks/useSignalR.ts
import { useEffect, useRef } from 'react'
import * as signalR from '@microsoft/signalr'

const HUB_URL = 'https://tech-test.raintor.com/Hub'

export function useSignalR(
  onReceive: (data: { userName: string; lat: string; lon: string }) => void
) {
  const connectionRef = useRef<signalR.HubConnection | null>(null)

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(HUB_URL)
      .withAutomaticReconnect()
      .build()

    connectionRef.current = connection

    connection.on('ReceiveLatLon', onReceive)

    connection.start().catch(err => console.error('SignalR Connection Error:', err))

    return () => {
      connection.stop()
    }
  }, [])

  const sendLocation = (data: { userName: string; lat: string; lon: string }) => {
    connectionRef.current?.invoke('SendLatLon', data.lat, data.lon, data.userName)
  }

  return { sendLocation }
}
