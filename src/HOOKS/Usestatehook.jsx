import React, { useState } from 'react'

function Usestatehook(props) {
const [counter,setcount] = useState(0)
    
const inc=()=>{
   
   setcount(counter+1);

}


const dec=()=>{
   
    setcount(counter-1);
 }

  return (
    <div>
        <center><h3>{counter}  {props.r}</h3></center> 
      <center> <button onClick={inc}>increase</button></center>  <br /> 
     
      <center> <button onClick={dec}>decrease</button></center> 
    </div>
  )
}

export default Usestatehook