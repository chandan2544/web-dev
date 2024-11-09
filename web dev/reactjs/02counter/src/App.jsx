// useState is a React Hook that lets you add a state variable (Components often need to change what’s on the screen as a result of an interaction.)
// to your component.

import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(1)

  // let counter = 5

// const addValue=()=>{
//   if (counter<20) {
//     setcounter(counter+1)
//   }
//   } 

// const removeValue=()=>{
//   if (counter>0) {
//     setcounter(counter-1)
//   }
//     } 

return (
    <>
     <h1>counter : {counter}</h1> 
     {/* <button onClick={addValue}>add value : {counter}</button>
     <button onClick={removeValue}>remove value : {counter}</button> */}

     <button onClick={()=>setcounter(counter+1)}>Add</button>
     <button onClick={()=>setcounter(counter-1)}>delete</button>
    </>
  )
}

export default App
