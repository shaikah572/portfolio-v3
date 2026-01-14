import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
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
    const [mobileOpen, setMobileOpen] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY

            if (current < 10) setViewNav(true)
            else if (current > lastScrollY.current) setViewNav(false)
            else setViewNav(true)

            lastScrollY.current = current
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])


    return (
        <nav
            className={cn(
                'fixed left-0 right-0 z-[1000] flex justify-center pointer-events-none transition-all duration-300',
                viewNav ? 'top-[20px] opacity-100' : 'top-[-100px] opacity-0'
            )}
        >
            <div className='pointer-events-auto flex items-center gap-2 px-3 py-2 border rounded-lg backdrop-blur-sm w-fit max-w-[90vw]'>

                {/* Desktop nav */}
                <div className='hidden md:flex gap-4 text-sm'>
                    {navSections.map((section) => (
                        <a
                            key={section.name}
                            href={section.href}
                            className='text-foreground/80 hover:text-primary transition-colors'
                        >
                            {section.name}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className='md:hidden p-2'
                    aria-label='Toggle menu'
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg transition-opacity duration-300 md:hidden',
                    mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                {navSections.map((section) => (
                    <a
                        key={section.name}
                        href={section.href}
                        onClick={() => setMobileOpen(false)}
                        className='hover:text-primary transition'
                    >
                        {section.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar
