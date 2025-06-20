'use client'

import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'

const schema = z.object({
  userName: z.string().trim(),
  lat: z.string().trim(),
  lon: z.string().trim(),
})

const SendLocationForm = () => {
  const form = useForm({
    defaultValues: {
      userName: '',
      lat: '',
      lon: '',
    },
    resolver: zodResolver(schema),
  })
  return (
    <form className="flex flex-col max-w-sm bg-black dark:bg-white rounded-[30px] p-8 text-white dark:text-black gap-4">
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

      <button type="button" className="hover:text-primary text-sm cursor-pointer">
        Auto Refill Current Location
      </button>

      <Button startIcon={SendIcon} className="w-fit mx-auto">
        Submit Location
      </Button>
    </form>
  )
}

export default SendLocationForm
