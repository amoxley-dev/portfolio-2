import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar