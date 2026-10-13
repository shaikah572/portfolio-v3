import React, { useEffect, useState } from 'react'

import NavBar from '../Components/NavBar'
import Header from '../Components/Section/Header'
import About from '../Components/Section/About' 
import Skills from '../Components/Section/Skills' 
import Projects from '../Components/Section/Projects' 
import Contact from '../Components/Section/Contact' 
import Footer from '../Components/Footer' 
import Preloader from '../Components/Preloader'

import SectionReveal from '../Components/SectionReveal'


const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout (() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading){
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <main>
        <Header />

        <SectionReveal> <About/> </SectionReveal>
        <SectionReveal> <Skills/> </SectionReveal>
        <SectionReveal> <Projects/> </SectionReveal>
        <SectionReveal> <Contact/> </SectionReveal>

      </main>
      <Footer />

    </div>
  )

}

export default Home