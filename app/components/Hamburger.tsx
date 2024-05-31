'use client'
import React from 'react'
import toggleMenu from '../utils/toggleMenu'

const Hamburger = () => {
  return (
    <>
      <button 
        id='mobile-open-button' 
        className='text-3xl sm:hidden focus:outline-none'
        onClick={() => toggleMenu()}
      >
        &#9776;
      </button>
    </>
  )
}

export default Hamburger