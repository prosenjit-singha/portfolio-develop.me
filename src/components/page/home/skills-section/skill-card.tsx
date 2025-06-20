import { ISkill } from '@/interfaces/skills.interface'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import React from 'react'

type SkillCardProps<T extends React.ElementType = 'div'> = {
  data: ISkill
  as?: T | typeof Link
} & React.ComponentProps<T>

const SkillCard = <T extends React.ElementType = 'div'>({
  data,
  as,
  className,
  ...props
}: SkillCardProps<T>) => {
  const Wrapper = as
  const Icon = data.icon
  return (
    <Wrapper
      className={cn(
        'rounded-[30px] p-6 flex flex-col gap-4 bg-white/7 max-w-[26.875rem] hover:shadow-primary/10 shadow-xl border border-transparent hover:border-primary/30 transition-[border-color,box-shadow,rotate] hover:rotate-0',
        className
      )}
      {...props}
    >
      <Icon size={60} />
      <h5 className="font-bold">{data.name}</h5>
      <p className="line-clamp-3 text-white/70">{data.desc}</p>
    </Wrapper>
  )
}

export default SkillCard
