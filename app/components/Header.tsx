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
        <MobileNavBar />
      </ header>
    </>
  )
}

export default Header