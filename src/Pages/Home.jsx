import React, { Suspense, lazy } from 'react'
import { lazyWithDelay } from '../lib/lazyWithDelay'


const ThemToggle = lazyWithDelay(() => import('../Components/ThemToggle'), 2500)
const NavBar = lazyWithDelay(() => import('../Components/NavBar'), 2500)

const Header = lazyWithDelay(() => import('../Components/Section/Header'), 2500)
const About = lazyWithDelay(() => import('../Components/Section/About'), 2500)
const Skills = lazyWithDelay(() => import('../Components/Section/Skills'), 2500)
const Projects = lazyWithDelay(() => import('../Components/Section/Projects'), 2500)
const Contact = lazyWithDelay(() => import('../Components/Section/Contact'), 2500)
const Footer = lazyWithDelay(() => import('../Components/Footer'), 2500)

const Preloader = lazy(() => import('../Components/Preloader'))


const HomePage = () => {

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
      <Footer />
    </div>
  )

}

const Home = () => {

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    </>
  )

}

export default Home