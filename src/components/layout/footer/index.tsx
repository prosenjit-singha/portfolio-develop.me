import BrandLogo from '@/components/shared/brand-logo'
import React from 'react'
import FooterNavLinkBlock from './nav-link-block'
import Link from 'next/link'

const FooterSection = () => {
  return (
    <footer className="mx-mw px-8 pb-8 relative">
      <div className="bold-section flex flex-col gap-5">
        <div className="flex justify-between">
          <BrandLogo className="text-primary text-[34px] h-fit" />

          <div className="flex flex-col lg:w-[50%]">
            <h2 className="text-[64px] font-bold">As You Can</h2>

            <div className="flex gap-8 lg:my-12">
              <div className="flex flex-col">
                <FooterNavLinkBlock
                  title="Say hello"
                  links={[
                    {
                      text: 'HELLO@DEVLOP.ME.COM',
                      href: 'HELLO@DEVLOP.ME.COM',
                      type: 'email',
                    },
                    {
                      text: 'MAHBUBUL@ME.COM',
                      href: 'MAHBUBUL@ME.COM',
                      type: 'email',
                    },
                  ]}
                />
                <FooterNavLinkBlock
                  className="mt-4"
                  title="Call"
                  links={[
                    {
                      text: '+784549 4981 00',
                      href: '+784549 4981 00',
                      type: 'phone',
                    },
                    {
                      text: '+8845 0100 211',
                      href: '+8845 0100 211',
                      type: 'phone',
                    },
                  ]}
                />
              </div>
              <FooterNavLinkBlock
                title="Menu"
                links={[
                  {
                    text: 'Home',
                    href: '/',
                  },
                  {
                    text: 'About',
                    href: '/about',
                  },
                  {
                    text: 'Portfolio',
                    href: '/portfolio',
                  },
                  {
                    text: 'Blog',
                    href: '/blog',
                  },
                ]}
              />
              <FooterNavLinkBlock
                title="Socials"
                links={[
                  {
                    text: 'Twitter',
                    href: 'https://twitter.com/',
                  },
                  {
                    text: 'Instagram',
                    href: 'https://www.instagram.com/',
                  },
                  {
                    text: 'Facebook',
                    href: 'https://www.facebook.com/',
                  },
                  {
                    text: 'Behance',
                    href: 'https://www.behance.net/',
                  },
                  {
                    text: 'Dribbble',
                    href: 'https://dribbble.com/',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex gap-2 justify-between items-center">
          <p className="font-bold text-[24px]">BESNIK</p>

          <p className="text-white/50 dark:text-black/50">© devlop.me 2022</p>

          <Link href="/privacy" className="text-white/50 dark:text-black/50 hover:text-primary">
            PRIVACY - TERMS
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
