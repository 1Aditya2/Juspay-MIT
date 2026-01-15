import React from 'react'

const CircleSprite = () => {
    return (
        <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="24" fill="#EF4444" />
            <circle cx="24" cy="28" r="4" fill="#FFFFFF" />
            <circle cx="40" cy="28" r="4" fill="#FFFFFF" />
            <path d="M22 40 Q32 46 42 40" stroke="#FFFFFF" stroke-width="4" fill="none" />
        </svg>

    )
}

export default CircleSprite