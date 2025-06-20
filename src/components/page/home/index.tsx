import React from 'react'
import HomePageHeroSection from './hero-section'
import HomePageSkillsSection from './skills-section'
import HomePageWorkingHistorySection from './working-history'
import HomePageWorkProcess from './my-work-process'

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HomePageHeroSection />
      <HomePageSkillsSection />
      <HomePageWorkingHistorySection />
      <HomePageWorkProcess />
    </main>
  )
}

export default HomePage
