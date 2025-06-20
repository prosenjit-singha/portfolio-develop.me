import React from 'react'
import { cn } from '@/libs/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type CommonProps<T extends React.ElementType> = {
  startIcon?: LucideIcon
  as?: T | typeof Link
}

type ButtonProps<T extends React.ElementType = 'button'> = CommonProps<T> & React.ComponentProps<T>

export const Button = <T extends React.ElementType = 'button'>({
  className,
  startIcon,
  as = 'button',
  children,
  ...props
}: ButtonProps<T>) => {
  const Icon = startIcon

  const Wrapper = as

  return (
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

type IconButtonProps<T extends React.ElementType> = Omit<React.ComponentProps<T>, 'children'> & {
  children: React.ReactNode
  as?: T | typeof Link
  size?: 'small' | 'default' | 'large'
}

export const IconButton = <T extends React.ElementType = 'button'>({
  className,
  as,
  children,
  size = 'default',
  ...props
}: IconButtonProps<T>) => {
  const Wrapper = as || 'button'

  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-15 h-15',
  }

  return (
    <Wrapper
      {...props}
      className={cn(
        'aspect-square flex items-center justify-center border rounded-full hover:cursor-pointer hover:border-primary/50 hover:text-primary transition-colors',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Wrapper>
  )
}
