import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const navSections = [
  { name: 'Home', href: '#header' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const NavBar = () => {
    const [viewNav, setViewNav] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY =window.scrollY
            if (currentScrollY < 10) {
                setViewNav(true)
            } else if (currentScrollY > lastScrollY.current){
                setViewNav(false)
            } else {
                setViewNav(true)
            }
            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <nav className={cn(
            'fixed left-0 right-0 flex justify-center items-center gap-3 z-[1000] pointer-events-none',
            viewNav ? 'opacity-100 top-[20px]' : 'opacity-0 top-[-100px]'
        )}>
            <div className='pointer-events-auto flex items-center gap-2 px-3 py-1.5 border rounded-lg backdrop-blur-sm w-fit max-w-[90vw]'>
                <div className='px-3 py-2 flex flex-row gap-3 rounded-[25px] transition-all duration-200 ease-in-out  cursor-pointer text-sm font-sans'>
                    {navSections.map((section, key) => {
                        return (<a
                        key={key}
                        herf={section.href}
                        className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                            {section.name}
                        </a> )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavBar