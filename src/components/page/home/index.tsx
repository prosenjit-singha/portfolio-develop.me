import React from 'react'
import HomePageHeroSection from './hero-section'
import HomePageSkillsSection from './skills-section'
import HomePageWorkingHistorySection from './working-history'
import HomePageWorkProcess from './my-work-process'
import ContactUsSection from './contact-us'

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HomePageHeroSection />
      <HomePageSkillsSection />
      <HomePageWorkingHistorySection />
      <HomePageWorkProcess />
      <ContactUsSection />
    </main>
  )
}

export default HomePage
