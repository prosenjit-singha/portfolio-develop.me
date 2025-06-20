import { Button } from '@/components/ui/button'
import { Textarea, Input } from '@/components/ui/input'
import { cn } from '@/libs/utils'
import { MailIcon, SendIcon } from 'lucide-react'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'developer-icons'
import Link from 'next/link'

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

type ContactUsFormProps = React.ComponentProps<'form'>

const ContactUsForm = ({ className, ...props }: ContactUsFormProps) => {
  return (
    <form
      {...props}
      className={cn(
        'bg-black dark:bg-white p-8 rounded-[30px] text-white dark:text-black flex flex-col gap-5',
        className
      )}
    >
      <Input placeholder="Enter your name" />
      <Input placeholder="Your email address" type="email" />
      <Textarea placeholder="Describe your project" rows={1} />

      <div className="flex gap-4 my-4">
        <Button type="submit" startIcon={SendIcon} className="w-fit">
          Send
        </Button>
        <Button startIcon={MailIcon} className="w-fit">
          Contact Me
        </Button>
      </div>

      {/* Socials */}
      <div className="flex gap-4 items-center mt-auto">
        <p className="text-white/50 dark:text-black/50">@williamrey</p>
        <div className="h-0.5 bg-white/50 dark:bg-black/50 rounded w-10" />
        <div className="flex gap-4 items-center">
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
      </div>
    </form>
  )
}

export default ContactUsForm
