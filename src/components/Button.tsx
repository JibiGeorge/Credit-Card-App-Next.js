import React from 'react'

interface ButtonProps {
    text: string;
}
export const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            type="submit">
            {text}
        </button>
    )
}
