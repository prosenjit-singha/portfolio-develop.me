import React from 'react'
import { cn } from '@/libs/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type ButtonProps<T extends React.ElementType> = React.ComponentProps<T> & {
  startIcon?: LucideIcon
  as?: T | typeof Link
  size?: 'sm' | 'default' | 'lg'
  sz?: 'small' | 'default' | 'large'
}

export const Button = <T extends React.ElementType = 'button'>({
  className,
  startIcon,
  as = 'button',
  children,
  // size = 'default' as "sm" | "default" | "lg",
  ...props
}: ButtonProps<T>) => {
  const Icon = startIcon

  // const sizeClasses = {
  //   sm: '',
  //   default: 'text-sm',
  //   lg: '',
  // }

  const Wrapper = as

  return (
    <Wrapper
      {...props}
      className={cn(
        'group flex items-center border rounded-full py-1 lg:py-2 hover:cursor-pointer  transition-all text-xs lg:text-sm hover:bg-primary hover:text-primary-foreground hover:shadow-primary/40 shadow-lg shadow-transparent hover:scale-105 active:scale-95',
        // sizeClasses[size],
        className
      )}
    >
      {Icon && (
        <span className="group-hover:-rotate-45 transition-transform duration-300 border rounded-full p-1 lg:h-9.5 lg:w-9.5 flex justify-center items-center">
          {<Icon size={20} />}
        </span>
      )}
      <span className="inline-block mx-2">{children}</span>
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
    small: 'size-[32px] p-1.5',
    default: 'size-[40px]',
    large: 'size-[52px]',
  }

  return (
    <Wrapper
      {...props}
      className={cn(
        'aspect-square flex items-center justify-center border rounded-full hover:cursor-pointer hover:bg-primary  transition-all hover:shadow-primary/40 shadow-lg shadow-transparent hover:scale-105 active:scale-95 hover:text-black hover:border-black hover:-rotate-45',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Wrapper>
  )
}
