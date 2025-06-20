import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter } from 'developer-icons'
import { PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    icon: <Facebook size={28} />,
    ariaLabel: 'Facebook Profile Link',
  },
  {
    href: 'https://www.instagram.com/',
    icon: <Instagram size={28} />,
    ariaLabel: 'Instagram Profile Link',
  },
  { href: 'https://twitter.com/', icon: <Twitter size={28} />, ariaLabel: 'Twitter Profile Link' },
]

const HomePageHeroSection = () => {
  return (
    <section className="px-mw relative lg:min-h-[calc(100vh-15rem)] flex items-center">
      <Image
        src="/assets/images/hero-bg.png"
        alt="Hero Background"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-svh -z-10"
      />
      <div className="px-8 flex lg:flex-col lg:gap-12 relative">
        {/* Heading */}
        <h1 className="lg:col-span-12">
          <span className="text-[70px] font-bold flex gap-4 items-start ">
            Trusted{' '}
            <span className="relative flex mb-4 px-4 text-white dark:text-black ">
              Partner
              <span className="absolute top-0 left-0 h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
            for
          </span>
          <span className="flex gap-4 text-[70px] font-bold ">
            <span>Your Website</span>
            <span className="bg-black text-white dark:bg-white dark:text-black rounded-lg px-4 flex items-center">
              Develop
            </span>
            .
          </span>
        </h1>
        <div className="flex lg:gap-12">
          {/* Contact Info */}
          <div className="flex gap-y-4 flex-col lg:-rotate-90">
            <p>@williamrey</p>
            <div className="flex gap-4 items-center">
              <div className="h-0.5 bg-black/50 dark:bg-white/50 rounded w-10" />
              {socialLinks.map(link => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="hover:scale-110 transition-transform"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>{' '}
          {/* Subtitle & CTA */}
          <div className="max-w-3xl flex flex-col gap-8">
            <p>
              Building the worlds best marketing websites for over a decade. Your trusted partner
              for strategy, design, and dev.
            </p>
            <Button startIcon={PhoneIcon} className="w-fit">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageHeroSection
