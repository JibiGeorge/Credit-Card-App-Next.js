import React from 'react'

interface HeaderProps {
  text?: string;
}
const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <h1 className='text-[#FFF] font-bold text-3xl'>{text}</h1>
  )
}

export default Header