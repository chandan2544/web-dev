import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageBox from './MessageBox'
import ProductTab from './ProductTab'
import LikedButton from './LikedButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MessageBox userName={"kjfdsgh"} textColor={"red"}/> */}

      {/* <h1 className='text-2xl font-semibold mb-5'>Blockbuster Deals on Computer Accessories | Shop Now</h1>
      <div className=' flex items-center justify-center gap-5 '>
      
      <ProductTab tittle={"Logitech MX Master"} idx={0}/>
      <ProductTab tittle={"Apple Pencil (2nd Gen)"} idx={1}/>
      <ProductTab tittle={"zebronics zeb-transformer"} idx={2}/>
      <ProductTab tittle={"Petronics Toad 23"} idx={3}/>
      </div> */}

      <LikedButton/>
    </>
  )
}

export default App
