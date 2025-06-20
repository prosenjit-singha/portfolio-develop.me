import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users',
}

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default UsersLayout
