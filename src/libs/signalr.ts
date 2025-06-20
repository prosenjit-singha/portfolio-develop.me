import * as signalR from '@microsoft/signalr'

const HUB_URL = 'https://tech-test.raintor.com/Hub'

const connection = new signalR.HubConnectionBuilder()
  .withUrl(HUB_URL)
  .withAutomaticReconnect()
  .build()

export const signalRConnection = connection
