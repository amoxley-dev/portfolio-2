'use client'
import React from 'react'
import toggleMenu from '../utils/toggleMenu'

const Hamburger = () => {
  return (
    <>
      <button 
        id='hamburger-button' 
        className='text-3xl sm:hidden relative w-8 h-8'
        onClick={() => toggleMenu()}
      >
        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
      </button>
    </>
  )
}

export default Hamburger