'use client'
import React from 'react'
import SendLocationForm from './location-form'
import dynamic from 'next/dynamic'
const ViewLocationOnMap = dynamic(() => import('./map'), {
  ssr: false, // ⬅️ disables SSR
})

const LocationSharingPage = () => {
  return (
    <main>
      <section className="mx-mw flex items-center">
        <div className="w-[40%]">
          <h3 className="mb-2">User 1</h3>
          <SendLocationForm />
        </div>
        <div className="w-full p-8">
          <h3>User 2</h3>
          <div className=" w-full">
            <ViewLocationOnMap />
          </div>
        </div>
      </section>
    </main>
  )
}

export default LocationSharingPage
