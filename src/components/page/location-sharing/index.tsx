'use client'
import React from 'react'
import SendLocationForm from './location-form'
import dynamic from 'next/dynamic'
import UsersList from '../users/users-list'
const ViewLocationOnMap = dynamic(() => import('./map'), {
  ssr: false, // ⬅️ disables SSR
})

const LocationSharingPage = () => {
  return (
    <main>
      <section className="mx-mw flex flex-col items-center gap-y-10 p-8">
        <div className="w-full max-w-[600px] flex flex-col">
          <h3 className="mb-2 text-center font-bold">User 1</h3>
          <SendLocationForm className="w-full" />
        </div>
        <div className="w-full min-h-[600px]">
          <h3 className="mb-2 text-center font-bold">User 2</h3>
          <div className=" w-full">
            <ViewLocationOnMap />
          </div>
        </div>
      </section>

      <section className="mx-mw flex flex-col p-8">
        <h3 className="mb-2 text-center font-bold">Users List</h3>
        <p className="text-center">You can see this user list location on map</p>
        <UsersList />
      </section>
    </main>
  )
}

export default LocationSharingPage
