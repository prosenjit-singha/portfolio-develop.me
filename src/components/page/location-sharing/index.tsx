'use client'
import React from 'react'
import SendLocationForm from './location-form'
import dynamic from 'next/dynamic'
import UsersList from '../users/users-list'
const ViewLocationOnMap = dynamic(() => import('./map'), {
  ssr: false, // ⬅️ disables SSR
})

type Location = {
  lat: number
  lon: number
  userName: string
}

const LocationSharingPage = () => {
  const [location, setLocation] = React.useState<Location | null>(null)
  return (
    <main>
      <section className="mx-mw flex flex-col items-center gap-y-10 p-8">
        <div className="w-full max-w-[600px] flex flex-col">
          <h3 className="mb-2 text-center font-bold">User 1</h3>
          <SendLocationForm className="w-full" />
        </div>
        <div className="w-full min-h-[400px]">
          <h3 className="mb-2 text-center font-bold">User 2</h3>
          <div className=" w-full">
            <ViewLocationOnMap location={location} setLocation={setLocation} />
          </div>
        </div>
      </section>

      <section className="mx-mw flex flex-col p-8">
        <h3 className="mb-2 heading-1 text-center font-bold">Users List</h3>
        <p className="text-center heading-2">You can see this user list location on map</p>
        <UsersList />
      </section>
    </main>
  )
}

export default LocationSharingPage
