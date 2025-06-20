import { ArrowDownIcon } from 'lucide-react'
import React from 'react'
import DesignProcessCard from './design-process-card'

const MY_WORK_PROCESS = [
  {
    name: 'Discovery',
    desc: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    readMoreHref: '/',
  },
  {
    name: 'Strategy',
    desc: "Every end-to-end project of ours begins with a tEspoke pre-build strategy. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
    readMoreHref: '/',
    className:
      'rotate-[3.85deg] bg-[#C5FF41] [&>div>h5]:bg-black [&>div>h5]:text-white dark:[&>div>h5]:bg-white dark:[&>div>h5]:text-black [&>p]:text-black/70 dark:[&>p]:text-black/70 [&>div>a]:text-black',
  },
  {
    name: 'Design',
    desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    readMoreHref: '/',
  },
  {
    name: 'Build',
    desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    readMoreHref: '/',
  },
]

const HomePageWorkProcess = () => {
  return (
    <section className="mx-mw space-px">
      <div className="bold-section">
        <div className="relative mb-8">
          <div className="flex items-stretch lg:absolute lg:top-[25%] lg:left-0">
            <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
              <ArrowDownIcon />
            </div>
            <div className="border px-3 py-2 rounded-full">
              <h3 className="leading-[1.10em] mt-1 ">Work Process</h3>
            </div>
          </div>
          <h2 className="heading-1 font-bold text-center mt-8 lg:mt-0">My Work Process</h2>
        </div>

        <ul className="grid lg:grid-cols-2 gap-8">
          {MY_WORK_PROCESS.map((item, index) => (
            <DesignProcessCard key={index} data={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomePageWorkProcess
