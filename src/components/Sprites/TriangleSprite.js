import React from 'react'

const TriangleSprite = () => {
    return (
        <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <polygon points="32,8 56,52 8,52" fill="#22C55E" />
            <circle cx="28" cy="34" r="3" fill="#FFFFFF" />
            <circle cx="36" cy="34" r="3" fill="#FFFFFF" />
        </svg>
    )
}

export default TriangleSprite