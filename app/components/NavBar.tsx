'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar: React.FC = () => {
  const defaultNavLink: string = 'hover:opacity-85';
  const activeNavLink: string = 'text-turquoise-blue-50'
  const pathname: string = usePathname();

  return (
    <>
      <nav className='hidden sm:block space-x-8 text-xl ' aria-label='main'>
        <Link href='/' className={`${defaultNavLink} ${pathname === '/' ? activeNavLink : ''}`}>Home</Link>
        <Link href='/projects' className={`${defaultNavLink} ${pathname === '/projects' ? activeNavLink : ''}`}>Projects</Link>
        <Link href='/resume'className={`${defaultNavLink} ${pathname === '/resume' ? activeNavLink : ''}`}>Resume</Link>
      </nav>
    </>
  )
}

export default NavBar