import React from 'react'
import Typewriter from 'typewriter-effect'
import { ArrowDown } from 'lucide-react'

const Header = () => {
    return (
        <section
            id='header'
            className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'>
                            {' '}
                            Shaikah
                        </span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
                            {' '}
                            Alrubayan
                        </span>
                    </h1>
                    <div className='text-3xl md:text-6xl tracking-tight'>
                        <Typewriter options={{
                            strings: ['Software Engineer', 'Full-Stack Developer'],
                            autoStart: true,
                            loop: true,
                            cursor: ' ✦',
                        }} />
                    </div>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href='#projects' className='custom-button'>
                            My Projects
                        </a>
                    </div>

                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll </span>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>
        </section>
    )
}

export default Header