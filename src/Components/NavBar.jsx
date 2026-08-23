import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemToggle from './ThemToggle'

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
            if (current < 10) {
                setViewNav(true)
            } else if (current > lastScrollY.current) {
                setViewNav(false)
            } else {
                setViewNav(true)
            }
            lastScrollY.current = current
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])


    useEffect(() => {

        const onResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false)
            }
        }

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)

    }, [])


    useEffect(() => {

        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])


    return (
        <>

            {/* Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between gap-4 px-5 md:px-10 lg:px-14 py-4 border-b bg-background/80 backdrop-blur-md transition-transform duration-300',

                    viewNav
                        ? 'translate-y-0'
                        : '-translate-y-full'
                )}
            >
                {/* Logo */}
                <a
                    href="#header"
                    className="flex items-center gap-2.5 no-underline" >
                    
                    <span
                        className="w-[30px] h-[30px] rounded-lg border flex items-center justify-center font-mono font-bold text-sm text-primary">
                        SH
                    </span>

                    <span className="hidden sm:block text-sm font-semibold tracking-tight text-foreground">
                        SHAIKAH{' '}
                        <span className="text-primary">
                            ALRUBAYAN
                        </span>
                    </span>
                </a>


                {/* Right side */}
                <div className="flex items-center gap-2">
                    {/* Desktop navigation */}

                    <div className="hidden md:flex items-center gap-1 mr-1">

                        {navSections.map((section) => (

                            <a
                                key={section.name}
                                href={section.href}
                                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                            >
                                {section.name}
                            </a>

                        ))}

                    </div>

                    <ThemToggle />


                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden w-10 h-10 rounded-[11px] border bg-foreground/[0.03] text-foreground flex items-center justify-center transition-colors hover:bg-foreground/[0.06]"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>


            {/* Mobile menu */}
            <div
                className={cn(
                    'fixed inset-0 z-[1100] bg-background backdrop-blur-md flex flex-col px-6 pt-[90px] transition-opacity duration-300 md:hidden',

                    mobileOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                )}
            >

                <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-5 right-6 w-10 h-10 rounded-[11px] border bg-foreground/[0.03] text-foreground flex items-center justify-center"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col">

                    {navSections.map((section) => (

                        <a
                            key={section.name}
                            href={section.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-4 border-b text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                            {section.name}
                        </a>

                    ))}

                </div>

            </div>

        </>
    )
}

export default NavBar