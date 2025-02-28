import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Marque from './components/Marque'
import About from './components/About'
import EyeIntraction from './components/EyeIntraction'
import Features from './components/Features'
const App = () => {
  
  return (
    <div className='h-screen w-full'>
      <NavBar />
      <HeroSection />
      <Marque />
      <About />
      <EyeIntraction />
      <Features />
    </div>
  )
}

export default App