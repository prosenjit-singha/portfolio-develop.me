import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon } from 'lucide-react'

const HomePageWorkingHistorySection = () => {
  return (
    <section className="px-mw relative mt-25">
      <Image
        src="/assets/images/neon-bg-2.png"
        alt="Hero Background"
        width={1000}
        height={1000}
        className="absolute -top-50 left-0 w-full h-svh -z-10"
      />
      <div className="flex flex-col space-px">
        <div className="flex items-stretch ml-auto mb-8">
          <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
            <ArrowDownIcon />
          </div>
          <div className="border px-3 py-2 rounded-full">
            <h3 className="leading-[1.10em] mt-1">About</h3>
          </div>
        </div>
        {/* Heading */}
        <h2 className="lg:col-span-12 text-right flex flex-col items-center heading-1">
          <span className=" font-bold flex gap-4 items-start ">
            I&apos;ve been
            <span className="relative flex lg:mb-4 px-4 text-white dark:text-black ">
              Developing
              <span className="absolute top-0 left-0 h-full lg:h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
          </span>
          <span className="flex gap-4  font-bold ">
            <span> Websites since</span>
            <span className="relative flex lg:mb-4 px-4 text-white dark:text-black ">
              2013
              <span className="absolute top-0 left-0 h-full lg:h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
          </span>
        </h2>
        {/* Sub Heading */}
        <p className="heading-2 max-w-[900px] text-center mx-auto mt-8 mb-8">
          We start every new client interaction with an in-depth discovery call where we get to know
          each other and recommend the best course of action.
        </p>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
          <h3 className="max-w-[15.5rem] font-bold text-[26px] text-center lg:text-start">
            PREVIOUSLY WORKED ON
          </h3>

          <ul className="grid gap-y-8 grid-cols-1 lg:grid-cols-3 gap-x-8 grid-rows-2 mt-8 lg:ml-20">
            {/* awards */}
            <li className="h-[90px] w-[280px] rounded-full bg-black flex dark:bg-white items-center justify-center [&>div]:bg-white dark:[&>div]:bg-black rotate-[11deg] lg:translate-x-[30%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/awards.svg')] mask-no-repeat mask-center mask-size-contain rotate-[-11.73deg]"></div>
            </li>
            {/* facebook */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex dark:border-white items-center justify-center [&>div]:bg-black dark:[&>div]:bg-white lg:translate-x-[50%] lg:translate-y-[-20%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/facebook.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
            {/* css design awards */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex dark:border-white items-center justify-center [&>div]:bg-black dark:[&>div]:bg-white rotate-[11deg] lg:translate-x-[40%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/css-design-awards.svg')] mask-no-repeat mask-center mask-size-contain rotate-[-16.97deg]"></div>
            </li>
            {/* css winner */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex dark:border-white items-center justify-center [&>div]:bg-black dark:[&>div]:bg-white">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/css-winner.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
            {/* thought works */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex dark:border-white items-center justify-center [&>div]:bg-black dark:[&>div]:bg-white rotate-[-9.34deg] ">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/thought-works.svg')] mask-no-repeat mask-center mask-size-contain rotate-[9.34deg]"></div>
            </li>

            {/* autodesk */}
            <li className="h-[90px] w-[280px] rounded-full border-black border-2 flex dark:border-white items-center justify-center [&>div]:bg-black dark:[&>div]:bg-white translate-x-[-10%]">
              <div className="w-full h-full mask-[url('/assets/svgs/companies/autodesk.svg')] mask-no-repeat mask-center mask-size-contain"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomePageWorkingHistorySection
