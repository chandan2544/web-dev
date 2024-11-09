import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-400 text-white text-xl w-full '>
      <ul className='flex px-6 gap-5 items-center justify-center'>
        <li>
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/about'> About </Link>
        </li>
        <li>
            <Link to='/dashboard'> Dashboard </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
