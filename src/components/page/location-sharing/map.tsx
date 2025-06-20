'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useSignalR } from '@/hooks/use-signalr'

const temp_position = [51.505, -0.09] as L.LatLngTuple

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

// const defaultCenter: LatLngTuple = [38.9072, -77.0369]
// const defaultZoom = 8
// const disneyWorldLatLng: LatLngTuple = [28.3852, -81.5639]
// const disneyLandLatLng: LatLngTuple = [33.8121, -117.919]

const ViewLocationOnMap = () => {
  const [mounted, setMounted] = React.useState(false)
  //   const [position, setPosition] = React.useState<[number, number]>([23.8103, 90.4125])
  //   const [userName, setUserName] = React.useState('Unknown')

  useSignalR((data: { userName: string; lat: string; lon: string }) => {
    console.log('Received:', data)
    //   setUserName(data.userName)
    //   setPosition([Number(data.lat), Number(data.lon)])
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-[300px] rounded-lg overflow-hidden ">
      <MapContainer
        center={temp_position}
        className="min-h-[400px] h-full"
        style={{ borderRadius: '1rem' }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={temp_position} icon={icon}>
          <Popup>Unknown</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default ViewLocationOnMap
