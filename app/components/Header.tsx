import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import Hamburger from './Hamburger';
import MobileNavBar from './MobileNavBar';

const Header: React.FC = () => {
  return (
    <>
      <header className='bg-turquoise-blue-800 text-white sticky top-0'>
        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center text-turquoise-blue-100'>
          <Logo />
          <Hamburger />
          <NavBar />
        </section>
        <section id='mobile-menu' className='absolute bg-black top-0 w-full text-5xl flex flex-col justify-center'>
          <MobileNavBar />
        </section>
      </ header>
    </>
  )
}

export default Header