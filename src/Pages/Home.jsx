import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import AboutSection from '../Components/AboutSection'
import ExpertiseSection from '../Components/ExpertiseSection'
import ContactSection from '../Components/ContactSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <ExpertiseSection/>
      <ContactSection/>
    </div>
  )
}

export default Home