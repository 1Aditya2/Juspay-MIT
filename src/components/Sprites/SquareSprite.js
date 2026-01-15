import React from 'react'

const SquareSprite = () => {
    return (
        <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="48" height="48" rx="6" fill="#3B82F6" />
            <circle cx="24" cy="28" r="4" fill="#FFFFFF" />
            <circle cx="40" cy="28" r="4" fill="#FFFFFF" />
            <rect x="22" y="40" width="20" height="4" rx="2" fill="#FFFFFF" />
        </svg>
    );
};

export default SquareSprite