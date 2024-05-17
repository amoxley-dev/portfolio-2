import React from 'react'
import Link from 'next/link'

const NavBar: React.FC = () => {
  const navLinkClass: string = 'hover:opacity-85 focus:text-turquoise-blue-50 focus:font-bold'  

  return (
    <>
      <nav className='hidden sm:block space-x-8 text-xl ' aria-label='main'>
        <Link href='/' className={navLinkClass}>Home</Link>
        <Link href='/projects' className={navLinkClass}>Projects</Link>
        <Link href='/Resume'className={navLinkClass}>Resume</Link>
      </nav>
    </>
  )
}

export default NavBar