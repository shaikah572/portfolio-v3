import React from 'react'

const LogoLoop = ({ logos = [], direction = 'right', className = '' }) => {
    const duplicatedLogos = [...logos, ...logos]

    return (
        <div className={`logo-loop-container ${className}`}>
            <div className={`logo-loop-track ${direction}`}>
                {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        {typeof logo === 'string' ? (
                            <img src={logo} alt={`Logo ${index}`} className="logo-image" />
                        ) : (
                            <div className="logo-content">{logo}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoLoop