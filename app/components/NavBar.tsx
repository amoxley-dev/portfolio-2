'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar: React.FC = () => {
  const defaultNavLink: string = 'link-underline';
  const activeNavLink: string = 'text-turquoise-blue-50 active-link-underline'
  const pathname: string = usePathname();

  return (
    <>
      <nav className='hidden sm:block space-x-8 text-x' aria-label='main'>
        <Link href='/' className={pathname === '/' ? activeNavLink : defaultNavLink}>Home</Link>
        <Link href='/projects' className={pathname === '/projects' ? activeNavLink : defaultNavLink}>Projects</Link>
        <Link href='/resume'className={pathname === '/resume' ? activeNavLink : defaultNavLink}>Resume</Link>
      </nav>
    </>
  )
}

export default NavBar