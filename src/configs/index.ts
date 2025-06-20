const configs = {
  signalR: {
    url: process.env.NEXT_PUBLIC_SIGNAL_HUB_URL!,
  },
  useFakeUsers: process.env.NEXT_PUBLIC_FAKE_USERS === 'true',
}

export default configs
