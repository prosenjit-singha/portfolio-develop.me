'use client'
import React from 'react'
import { IconButton } from '../ui/button'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-react'
import { cn } from '@/libs/utils'

type ThemeTogglerButtonProps = Omit<React.ComponentProps<typeof IconButton>, 'children'>
// type ColorScheme = 'dark' | 'light' | 'system'

const ThemeTogglerButton = ({ className, ...props }: ThemeTogglerButtonProps) => {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const ThemeIcon = theme === 'system' ? MonitorIcon : theme === 'dark' ? MoonIcon : SunIcon
  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(systemTheme === 'dark' ? 'light' : 'dark')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <IconButton
      onClick={toggleTheme}
      className={cn('p-2', className)}
      {...props}
      suppressHydrationWarning
    >
      {mounted ? <ThemeIcon /> : <div className="w-4 h-4" />}
    </IconButton>
  )
}

export default ThemeTogglerButton
