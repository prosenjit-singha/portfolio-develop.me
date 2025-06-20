import BrandLogo from '@/components/shared/brand-logo'
import React from 'react'
import FooterNavLinkBlock from './nav-link-block'

const FooterSection = () => {
  return (
    <footer className="mx-mw px-8 relative mt-12 ">
      <div className="bg-black dark:bg-white p-8 rounded-[52px] text-white dark:text-black flex flex-col gap-5">
        <div>
          <BrandLogo className="text-primary text-[34px]" />

          <div className="flex gap-8 lg:gap-10 xl:gap-12">
            <h2 className="text-[64px] font-bold">As You Can</h2>

            <div className="flex gap-8">
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
      </div>
    </footer>
  )
}

export default FooterSection
