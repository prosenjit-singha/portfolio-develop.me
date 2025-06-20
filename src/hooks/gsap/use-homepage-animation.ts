import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export const useHomePageAnimation = () => {
  const smoother = React.useRef<ScrollSmoother>(null)
  const [mounted, setMounted] = React.useState(false)
  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      })
    },
    { scope: '.smooth-wrapper', dependencies: [mounted] }
  )
  React.useEffect(() => {
    setMounted(true)
  }, [])
}
