import React from 'react'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { IconButton } from '@/components/ui/button'
import { MY_SKILLS } from '@/constants/skills.const'
import SkillCard from './skill-card'
import { isOddNumber } from '@/libs/number'
import { cn } from '@/libs/utils'
import Marquee from 'react-fast-marquee'
const HomePageSkillsSection = () => {
  return (
    <section className="mx-mw mt-10">
      <div className="bold-section space-mx !p-0">
        <div className="flex items-stretch  p-8 lg:p-12">
          <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
            <ArrowDownIcon />
          </div>
          <div className="border px-3 py-2 rounded-full">
            <h3 className="leading-[1.10em] mt-1">Why Choose Me?</h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 p-8 lg:p-12">
          <h1 className="heading-1 font-bold max-w-[516px] mb-auto">My Extensive List of Skills</h1>
          <div className="flex flex-col gap-4 items-end">
            <h2 className="text-right max-w-[510px] text-[1.125rem]">
              Building the worlds best marketing Your trusted partner for strategy, design, and dev.
            </h2>
            <div className="h-[1px] w-full bg-white dark:bg-black" />
            <div className="flex gap-2">
              <IconButton size="large">
                <ArrowLeftIcon />
              </IconButton>
              <IconButton size="large">
                <ArrowRightIcon />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Skill Carousal Section */}
        <ul className="">
          <Marquee className="flex gap-4 lg:gap-8 overflow-x-auto py-10">
            {MY_SKILLS.map((skill, index) => {
              const isOdd = isOddNumber(index)
              return (
                <li key={index}>
                  <SkillCard
                    className={cn(isOdd ? 'rotate-6' : '')}
                    data={skill}
                    key={index}
                    as="div"
                  />
                </li>
              )
            })}
          </Marquee>
        </ul>
      </div>
    </section>
  )
}

export default HomePageSkillsSection
