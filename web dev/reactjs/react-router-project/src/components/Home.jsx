import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate('/about')
  }
  return (
    <div>
   <h1 className='text-3xl'>Home page</h1> 

      {/* navigate implementation using useNavigate() hook */}
      <button className='bg-red-600 px-3 text-white py-1.5 rounded m-5' onClick={handleClick}>move to About page</button>
    </div>
  )
}

export default Home
