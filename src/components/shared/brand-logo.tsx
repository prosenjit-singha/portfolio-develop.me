import React from 'react'
import Link from 'next/link'

import { bwGradualBold } from '@/helpers/fonts.helper'
import { cn } from '@/libs/utils'

const BrandLogo = ({ className, ...props }: Omit<React.ComponentProps<typeof Link>, 'href'>) => {
  return (
    <Link
      className={cn(
        bwGradualBold.className,
        'uppercase hover:text-primary transition-colors',
        className
      )}
      {...props}
      href={'/'}
    >
      devlop.me
    </Link>
  )
}

export default BrandLogo
