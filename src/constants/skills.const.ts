import { ISkill } from '@/interfaces/skills.interface'
import { HTML5, JavaScript, NextJs } from 'developer-icons'

export const MY_SKILLS: ISkill[] = [
  {
    icon: HTML5,
    name: 'HTML & CSS',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    name: 'Javascript',
    icon: JavaScript,
    desc: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  //   {
  //     icon: React,
  //     name: 'React',
  //     desc: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  //   },
  {
    name: 'Next.js',
    icon: NextJs,
    desc: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
]
