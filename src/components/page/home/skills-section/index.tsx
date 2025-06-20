import React from 'react'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { IconButton } from '@/components/ui/button'
import { MY_SKILLS } from '@/constants/skills.const'
import SkillCard from './skill-card'
import { isOddNumber } from '@/libs/number'
import { cn } from '@/libs/utils'

const HomePageSkillsSection = () => {
  return (
    <section className="mx-mw p-8">
      <div className="bg-black dark:bg-white p-8 rounded-[40px] text-white dark:text-black">
        <div className="flex items-stretch">
          <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
            <ArrowDownIcon />
          </div>
          <div className="border px-3 py-2 rounded-full">
            <h3 className="leading-[1.10em] mt-1">Why Choose Me?</h3>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8 mt-8">
          <h1 className="text-[58px] font-bold max-w-[516px] mb-auto">
            My Extensive List of Skills
          </h1>
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
        <ul className="flex gap-4 overflow-x-auto py-10">
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
        </ul>
      </div>
    </section>
  )
}

export default HomePageSkillsSection
