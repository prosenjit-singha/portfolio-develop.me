import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactUsForm from './contact-us-form'

const ContactUsSection = () => {
  return (
    <section className="mx-mw px-8 relative my-12">
      <Image
        src="/assets/images/neon-bg-3.png"
        alt="Neon Background"
        width={1000}
        height={1000}
        className="absolute 1bottom-20 left-0 w-full h-svh -z-10"
      />
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-between">
        <div>
          <div className="flex items-stretch">
            <div className="border rounded-full self-stretch aspect-square w-10 flex items-center justify-center">
              <ArrowDownIcon />
            </div>
            <div className="border px-3 py-2 rounded-full">
              <h3 className="leading-[1.10em] mt-1">Contact</h3>
            </div>
          </div>
          {/* Heading */}
          <h3 className="lg:col-span-12 max-w-[770px] heading-1 font-bold flex flex-wrap gap-x-4 my-4 lg:my-0">
            <span className=" flex gap-4 items-start ">Interested in</span>
            <span className="relative flex lg:mb-4 px-4 text-white dark:text-black ">
              work
              <span className="absolute top-0 left-0 h-full lg:h-[calc(100%-10px)] w-full z-[-10] bg-black  dark:bg-white rounded-lg" />
            </span>
            together?
          </h3>

          <p className="max-w-[700px] mb-4">
            We start every new client interaction with an in-depth discovery call where we get to
            know each other
          </p>

          <Button startIcon={PhoneIcon}>Schedule a Call</Button>
        </div>
        <ContactUsForm />
      </div>
    </section>
  )
}

export default ContactUsSection
