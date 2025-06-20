import React from 'react'
import BrandLogo from '@/components/shared/brand-logo'
import ThemeTogglerButton from '@/components/shared/theme-toggler-button'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import MenuToggler from './menu-toggler'
import { NAV_MENU } from '@/constants/manu'

const PageHeader = () => {
  return (
    <header className="px-mw">
      <nav className="flex items-center space-px py-3 lg:min-h-[100px]">
        <MenuToggler />

        <BrandLogo className="lg:text-[34px] text-[20px] font-extrabold hover hidden lg:block" />

        <ul className="ml-auto lg:flex gap-4 hidden">
          {NAV_MENU.map(link => (
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
