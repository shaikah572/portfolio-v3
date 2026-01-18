import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center'>
            {' '}
            <p className='text-sm text-muted-foreground'>
                {' '}
                &copy; {currentYear} Shaikah Alrubayan
            </p>
        </footer>
    )
}

export default Footer