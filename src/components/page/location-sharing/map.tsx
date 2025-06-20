'use client'

import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useSignalR } from '@/hooks/use-signalr'
import { LocateFixedIcon } from 'lucide-react'
import { Bounce, toast } from 'react-toastify'
import { useTheme } from 'next-themes'

const defaultPosition: [number, number] = [51.505, -0.09]

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

type Location = {
  lat: number
  lon: number
  userName: string
}

const MapMover = ({ location }: { location: Location | null }) => {
  const map = useMap()

  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lon], 14, { duration: 2 })
    }
  }, [location, map])

  return null
}

const ViewLocationOnMap = () => {
  const [location, setLocation] = useState<Location | null>(null)
  const { connection } = useSignalR()
  const { theme } = useTheme()

  useEffect(() => {
    connection?.on('ReceiveLatLon', (data: { userName: string; lat: string; lon: string }) => {
      toast.info(`New location received from ${data.userName}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      })
      setLocation({
        lat: parseFloat(data.lat),
        lon: parseFloat(data.lon),
        userName: data.userName,
      })
    })
  }, [connection])

  const center: [number, number] = location ? [location.lat, location.lon] : defaultPosition

  const handlePinMyLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({
          lat: latitude,
          lon: longitude,
          userName: 'You',
        })
      },
      error => {
        console.error('Geolocation error:', error)
        alert('Failed to get location')
      }
    )
  }

  return (
    <div className="min-h-[300px] rounded-lg overflow-hidden">
      <MapContainer
        key={`${location?.lat}-${location?.lon}`}
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="min-h-[400px] h-full relative"
        style={{ borderRadius: '1rem' }}
      >
        <button
          aria-label="Go to your location"
          className="shadow-lg rounded-full p-2 absolute top-2 text-black bg-white right-2 z-[400] cursor-pointer hover:bg-white hover:text-black "
          onClick={handlePinMyLocation}
        >
          <LocateFixedIcon />
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {location && (
          <Marker position={[location.lat, location.lon]} icon={icon}>
            <Popup>{location.userName}</Popup>
          </Marker>
        )}

        <MapMover location={location} />
      </MapContainer>
    </div>
  )
}

export default ViewLocationOnMap
