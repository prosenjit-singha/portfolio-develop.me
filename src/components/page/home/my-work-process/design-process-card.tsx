import React from 'react'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'

type DesignProcessCardProps = {
  data: {
    name: string
    desc: string
    readMoreHref: string
    className?: string
  }
} & React.ComponentProps<'li'>

const DesignProcessCard = ({ className, data, ...props }: DesignProcessCardProps) => {
  return (
    <li
      className={cn(
        'rounded-[30px] p-6 flex flex-col gap-4 bg-white/7 hover:shadow-primary/10 shadow-xl border border-transparent hover:border-primary/30 transition-[border-color,box-shadow,rotate] hover:rotate-0',
        className,
        data.className
      )}
      {...props}
    >
      <div className="flex">
        <h5
          aria-label="process"
          className="bg-[#C5FFEE] text-black flex px-8 pt-2 py-1 rounded-full"
        >
          {data.name}
        </h5>
        <Link
          href={data.readMoreHref}
          className="hover:text-primary transition-colors flex gap-4 items-center ml-auto text-inherit group"
        >
          <MoveRightIcon className="mb-1 group-hover:translate-x-3 transition-transform" />
          Read More
        </Link>
      </div>
      <p className="line-clamp-4 text-[18px] text-white/70 dark:text-black/70">{data.desc}</p>
    </li>
  )
}

export default DesignProcessCard
