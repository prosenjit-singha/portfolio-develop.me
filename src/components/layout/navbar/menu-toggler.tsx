'use client'

import React from 'react'
import { IconButton } from '@/components/ui/button'
import { MenuIcon, XIcon } from 'lucide-react'
import { NAV_MENU } from '@/constants/manu'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

const MenuToggler = () => {
  const [open, setOpen] = React.useState(false)
  const toggleMenu = () => setOpen(!open)
  return (
    <>
      {!open && (
        <IconButton onClick={toggleMenu} aria-label="Menu" title="open menu" className="lg:hidden">
          <MenuIcon />
        </IconButton>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed flex h-dvh w-dvw top-0 left-0 z-10 bg-black/80 backdrop-blur-lg lg:hidden ${open ? 'block' : 'hidden'}`}
          >
            <IconButton
              onClick={toggleMenu}
              aria-label="Menu"
              title="close menu"
              className="fixed top-3 left-3 text-white border-white"
            >
              <XIcon />
            </IconButton>
            <div className="flex flex-col gap-8 w-full items-center mx-auto my-auto">
              {NAV_MENU.map(link => (
                <Link
                  onClick={toggleMenu}
                  key={link.href}
                  href={link.href}
                  className="text-white w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuToggler
