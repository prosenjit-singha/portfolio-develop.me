'use client'

import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'
import { cn } from '@/libs/utils'
import { useSignalR } from '@/components/context/signalr'

const schema = z.object({
  userName: z.string().trim(),
  lat: z.coerce.number(),
  lon: z.coerce.number(),
})

const SendLocationForm = ({
  className,
  ...props
}: Omit<React.ComponentProps<'form'>, 'onSubmit'>) => {
  const form = useForm({
    defaultValues: {
      userName: '',
      lat: '' as unknown as number,
      lon: '' as unknown as number,
    },
    resolver: zodResolver(schema),
  })

  const { sendLocation } = useSignalR()

  const handleAutoFillLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        form.setValue('lat', latitude)
        form.setValue('lon', longitude)
      },
      error => {
        console.error('Geolocation error:', error)
        alert('Failed to get location')
      }
    )
  }

  const handleSubmit = form.handleSubmit(data => {
    sendLocation(data)
  })

  return (
    <form
      className={cn(
        'flex flex-col bg-black dark:bg-white rounded-[30px] p-8 text-white dark:text-black gap-4',
        className
      )}
      {...props}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Enter your username"
        autoComplete="username"
        className="border-white/30 dark:border-black/20"
        {...form.register('userName')}
      />
      <Input
        placeholder="Latitude"
        className="border-white/30 dark:border-black/20"
        {...form.register('lat')}
      />
      <Input
        placeholder="Longitude"
        className="border-white/30 dark:border-black/20"
        {...form.register('lon')}
      />

      <button
        onClick={handleAutoFillLocation}
        type="button"
        className="hover:text-primary text-sm cursor-pointer"
      >
        Auto Refill Current Location
      </button>

      <Button type="submit" startIcon={SendIcon} className="w-fit mx-auto">
        Submit Location
      </Button>
    </form>
  )
}

export default SendLocationForm
