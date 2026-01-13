import React from 'react'
import ThemToggle from '../Components/ThemToggle'
import NavBar from '../Components/NavBar'

import Header from '../Components/Section/Header'
import About from '../Components/Section/About'
import Skills from '../Components/Section/Skills'
import Projects from '../Components/Section/Projects'
import Contact from '../Components/Section/Contact'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
        
        <ThemToggle />
        <NavBar />
        <main>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
       
    </div>
  )
}

export default Home