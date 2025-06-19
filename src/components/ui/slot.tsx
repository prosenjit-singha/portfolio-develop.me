import React from 'react'
import { clsx } from 'clsx' // or use your own `cn()` function

type SlotProps = {
  children: (React.ReactNode | Element)[]
} & React.HTMLAttributes<HTMLElement>

export function Slot({ children, className, ...rest }: SlotProps) {
  const child = children[0]
  if (child && React.isValidElement(child))
    return React.cloneElement(child, {
      ...rest,
      // @ts-expect-error: children.props.className is of type unknown
      className: clsx(children?.props?.className, className),
    })
  else throw Error('If you pass asChild prop, you must pass only one child')
}
