import { cn } from '@/libs/utils'
import React from 'react'

type InputProps = React.ComponentProps<'input'>

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        'w-full border-0 border-b border-border  focus-visible:outline-0 focus-visible:border-b-primary',
        className
      )}
      {...props}
    />
  )
}

type TextareaProps = React.ComponentProps<'textarea'>

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        'w-full border-0 border-b border-border  focus-visible:outline-0 focus-visible:border-b-primary',
        className
      )}
      {...props}
    />
  )
}

export { Input, Textarea }
