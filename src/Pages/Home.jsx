import React from 'react'
import ThemToggle from '../Components/ThemToggle'
import NavBar from '../Components/NavBar'
import Header from '../Components/Section/Header'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
        
        <ThemToggle />
        <NavBar />
        <main>
            <Header />
        </main>
       
    </div>
  )
}

export default Home