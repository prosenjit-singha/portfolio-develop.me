import React from 'react'
import { cn } from '@/libs/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type CommonProps = {
  startIcon?: LucideIcon
}

type AsButtonProps = CommonProps &
  React.ComponentProps<'button'> & {
    as?: 'button'
  }

type AsLinkProps = CommonProps &
  React.ComponentProps<typeof Link> & {
    as: typeof Link
  }

type ButtonProps = AsButtonProps | AsLinkProps

const Button = ({ className, startIcon, as = 'button', children, ...props }: ButtonProps) => {
  const Icon = startIcon

  const Wrapper = as

  return (
    // @ts-expect-error: children.props.className is of type unknown
    <Wrapper
      {...props}
      className={cn(
        'flex items-center border rounded-full py-2 hover:cursor-pointer hover:border-primary/50 hover:text-primary transition-colors',
        className
      )}
    >
      {Icon && (
        <span className="border rounded-full p-1 h-9.5 w-9.5 flex justify-center items-center">
          {<Icon size={20} />}
        </span>
      )}
      <span className="inline-block mx-3">{children}</span>
    </Wrapper>
  )
}

export default Button
