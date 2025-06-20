import React from 'react'
import BrandLogo from '@/components/shared/brand-logo'
import ThemeTogglerButton from '@/components/shared/theme-toggler-button'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/location-sharing', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
]

const PageHeader = () => {
  return (
    <header className="px-mw">
      <nav className="flex items-center space-px py-3 lg:min-h-[100px]">
        <BrandLogo className="lg:text-[34px] text-[20px] font-extrabold hover" />

        <ul className="ml-auto flex gap-4 hidden">
          {links.map(link => (
            <li key={link.href} className="hover:text-primary cursor-pointer transition-colors">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ThemeTogglerButton className="ml-auto lg:ml-4" />
        <Button startIcon={ArrowRightIcon} className="ml-4">
          Start Project
        </Button>
      </nav>
    </header>
  )
}

export default PageHeader
