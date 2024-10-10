import React, { useState } from 'react'
import {useEffect} from 'react'
import Use from './Use.css'
function UseEffect() { 
   const[count ,setcount]= useState(0)
    useEffect(() => {
     console.log("its running")

     document.title=count
    }, [count])
  return (
    <div id='eff'>

       <h2>Learning UseEffect</h2> 

    <h3> counter = {count}</h3>
       <button onClick={()=> setcount (count+1)}> Increment </button>
       <button onClick={()=> setcount (count-1)}> Decrement </button>
     </div>
  )
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
export default UseEffect;