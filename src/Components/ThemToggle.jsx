import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const ThemToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme == 'dark') {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            setIsDark(false)
        }
    }, [])

    const changeTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDark(true)
        }
    }

    return (
        <button onClick={changeTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}>
            {isDark ?
                (<Sun className='h-6 w6 text-white' />)
                :
                (<Moon className='h-6 w-6 text-black' />)}
        </button>
    )
}

export default ThemToggle