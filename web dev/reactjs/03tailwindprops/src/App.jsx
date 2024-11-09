// props make the component reusable
// React components use props to communicate with each other. Every parent component can 
// pass some information to its child components by giving them props. Props might remind
// you of HTML attributes, but you can pass any JavaScript value through them, including
// objects, arrays, and functions.



import React, { useState } from 'react'
import Card from './components/card'

function App() {

  let myobj={
    username:"chandan",
    age:21
  }
  return (
    <>
    <h1 className='bg-red-500 p-4 rounded mb-4'>Tailwind test</h1>
   {/* <Card username="chandan"  myObj={myobj}/> */}
   <Card cardName="anjali" btnText="click me!"/>
   <Card cardName="riya" btnText="visit me"/>
    </>
  )
}

export default App
