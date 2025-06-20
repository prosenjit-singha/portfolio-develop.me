import BrandLogo from '@/components/shared/brand-logo'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
]

const PageHeader = () => {
  return (
    <header className="px-mw">
      <nav className="flex items-center px-8 py-2 min-h-[100px]">
        <BrandLogo className="text-[34px] font-extrabold hover" />

        <ul className="ml-auto flex gap-4">
          {links.map(link => (
            <li key={link.href} className="hover:text-primary cursor-pointer transition-colors">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Button startIcon={ArrowRightIcon} className="ml-4">
          Start Project
        </Button>
      </nav>
    </header>
  )
}

export default PageHeader
