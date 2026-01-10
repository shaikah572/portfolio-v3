import React from 'react'
import ThemToggle from '../Components/ThemToggle'
import NavBar from '../Components/NavBar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
        
        <ThemToggle />
        <NavBar />
       
    </div>
  )
}

export default Home