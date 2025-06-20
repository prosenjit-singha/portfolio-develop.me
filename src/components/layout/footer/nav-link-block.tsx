import React from 'react'
import Link from 'next/link'

type FooterNavLinkBlockProps = {
  title: string
  links: { text: string; href: string; type?: 'link' | 'email' | 'phone' }[]
} & React.ComponentProps<'div'>

const FooterNavLinkBlock = ({ title, links, ...props }: FooterNavLinkBlockProps) => {
  return (
    <div {...props}>
      <h3 className="mb-2 text-white/40 dark:text-black/40">{title}</h3>
      <ul className="flex flex-col">
        {links.map(link => {
          const type = link.type || 'link'
          let url = link.href

          switch (type) {
            case 'email':
              url = `mailto:${link.href}`
              break
            case 'phone':
              url = `tel:${link.href}`
              break
          }

          return (
            <li key={link.href}>
              <Link
                href={url}
                className="uppercase font-normal hover:text-primary transition-colors text-sm"
              >
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterNavLinkBlock
