import React from 'react'
import '@/styles/preloader.scss'

const Preloader = () => {
    return (
        <div className='preloader'>
            <div className='frame'>
                <span className='line top'></span>
                <span className='line right'></span>
                <span className='line bottom'></span>
                <span className='line left'></span>

                <div className='brand'>
                    <span className='initial'>SA.</span>
                </div>
            </div>

            <p className='tagline'>Loading...</p>
        </div>
    )
}

export default Preloader