import React from 'react'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <>
      <div className='text-3xl font-medium text-turquoise-blue-50'>
        <Link href='/'>Alex Moxley</Link>
      </div>
    </>
  )
}

export default Logo