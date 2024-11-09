import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard')
  }
  return (
    <div>
     <h1 className='text-3xl'>About page</h1> 

      <button className='bg-red-600 px-3 text-white py-1.5 rounded m-5' onClick={handleClick}>move to dashboard page</button>
    </div>
  )
}

export default About
