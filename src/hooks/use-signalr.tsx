import React from 'react'
import { SignalRContext } from '@/components/context/signalr'

export const useSignalR = () => React.useContext(SignalRContext)
