'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import toggleMenu from '../utils/toggleMenu'

const MobileNavBar = () => {
  const pathname: string = usePathname();
  const activeNavLink: string = 'mobile-link-underline';

  return (
    <>
      <section 
        id='mobile-menu' 
        className='absolute bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden'
        onClick={() => toggleMenu()}
      >
        <nav className='flex flex-col min-h-screen items-center py-8'>
          <Link href='/' className={pathname === '/' ? activeNavLink : ''}>Home</Link>
          <Link href='/projects' className={pathname === '/projects' ? activeNavLink : ''}>Projects</Link>
          <Link href='/resume'className={pathname === '/resume' ? activeNavLink : ''}>Resume</Link>
        </nav>
      </section>
    </>
  )
}

export default MobileNavBar