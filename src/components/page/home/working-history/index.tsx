import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon } from 'lucide-react'

const HomePageWorkingHistorySection = () => {
  return (
    <section className="px-mw relative mt-25">
      <Image
        src="/assets/images/hero-bg.png"
        alt="Hero Background"
        width={1000}
        height={1000}
        className="absolute -top-50 left-0 w-full h-svh -z-10"
      />
      <div className="flex flex-col px-8">
        <div className="flex items-stretch ml-auto mb-8">
          <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
            <ArrowDownIcon />
          </div>
          <div className="border px-3 py-2 rounded-full">
            <h3 className="leading-[1.10em] mt-1">About</h3>
          </div>
        </div>
        {/* Heading */}
        <h2 className="lg:col-span-12 text-right flex flex-col items-center">
          <span className="text-[70px] font-bold flex gap-4 items-start ">
            I&apos;ve been
            <span className="relative flex mb-4 px-4 text-white dark:text-black ">
              Developing
              <span className="absolute top-0 left-0 h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
          </span>
          <span className="flex gap-4 text-[70px] font-bold ">
            <span> Websites since</span>
            <span className="relative flex mb-4 px-4 text-white dark:text-black ">
              2013
              <span className="absolute top-0 left-0 h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
          </span>
        </h2>
        {/* Sub Heading */}
        <p className="text-[1.125rem] max-w-[900px] text-center mx-auto mt-8">
          We start every new client interaction with an in-depth discovery call where we get to know
          each other and recommend the best course of action.
        </p>

        {/* Footer */}
        <div className="flex gap-8 items-center">
          <h3 className="max-w-[15.5rem] font-bold text-[26px]">PREVIOUSLY WORKED ON</h3>

          <ul className="grid grid-cols-3 gap-x-8 grid-rows-2 mt-8 lg:ml-20">
            {/* awards */}
            <li className="h-[90px] w-[280px] rounded-full bg-black flex items-center justify-center [&>div]:bg-white rotate-[11deg] translate-x-[30%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/awards.svg')] mask-no-repeat mask-center mask-size-contain rotate-[-11.73deg]"></div>
            </li>
            {/* facebook */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex items-center justify-center [&>div]:bg-black translate-x-[50%] translate-y-[-20%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/facebook.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
            {/* css design awards */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex items-center justify-center [&>div]:bg-black rotate-[11deg] translate-x-[40%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/css-design-awards.svg')] mask-no-repeat mask-center mask-size-contain rotate-[-16.97deg]"></div>
            </li>
            {/* css winner */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex items-center justify-center [&>div]:bg-black">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/css-winner.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
            {/* thought works */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex items-center justify-center [&>div]:bg-black rotate-[-9.34deg] ">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/thought-works.svg')] mask-no-repeat mask-center mask-size-contain rotate-[9.34deg]"></div>
            </li>

            {/* autodesk */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex items-center justify-center [&>div]:bg-black translate-x-[-10%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/autodesk.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomePageWorkingHistorySection
