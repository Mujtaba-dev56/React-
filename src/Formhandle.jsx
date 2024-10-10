import React from 'react'
import { useState } from 'react'



 function Formhandle() {

  
// this is using usestates for single form handling

const [name, setname] = useState('')
const [password, setpassword] = useState('')
const [country, setcountry] = useState('')

const handlesumit=(e)=>{
    e.preventDefault();
    alert('Your form has been submitted')

    // this blank for empty all input boxes after submission
    setname('');
    setpassword('');
    setcountry('');
}





const submithandle=(e)=>{
e.preventDefault();
alert('Your form submitted')
console.log(formdata);

}

  return ( <>
    <div>

      

        <form onSubmit={handlesumit} >
        <h1>Form Handling in React</h1>
        <br />
        <div>
        Name :    <input value={name} onChange={(e)=>setname(e.target.value)} type="text" /> </div>
        <br />
        <h1>{name}</h1>
        <div> Password :<input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" /> </div>
        <br />
        <div>Country : <input value={country} onChange={(e)=>setcountry(e.target.value)} type="text" /> </div>
        <br />
        <center><button>Submit</button></center>
        </form>

 

    </div>



</>
  )
}

export default Formhandle;