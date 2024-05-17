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
      <nav className='hidden sm:block space-x-8 text-xl z-20' aria-label='main'>
        <Link href='/' className={pathname === '/' ? activeNavLink : defaultNavLink}>Home</Link>
        <Link href='/projects' className={pathname === '/projects' ? activeNavLink : defaultNavLink}>Projects</Link>
        <Link href='/resume'className={pathname === '/resume' ? activeNavLink : defaultNavLink}>Resume</Link>
      </nav>
    </>
  )
}

export default NavBar