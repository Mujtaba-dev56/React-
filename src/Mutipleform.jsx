import React from 'react'
import { useState } from 'react'


  // this is using usestates for multiple form handling
function Mutipleform() {


    const [formdata, setformdata] = useState ({
        name : '' ,
        city :'' ,
        age :'',
        password :'' ,
        email : '' ,
        phone : '',
      })
      
      const handlechange =(e)=>{
        const {name,value }= e.target;
        setformdata({...formdata,[name] :value})
      }

      const submithandle=(e)=>{
e.preventDefault;
alert('your form has submitted')
      }

  return (
    <div>

<form onSubmit={submithandle}> 
 
 <h2>Multiple Inputs Form Handling</h2>
<div>Name : <input  value={formdata.name} name="name" type="text" onChange={handlechange} /> <br /></div>
<div>City :<input  value={formdata.city} name='city'  type="text" onChange={handlechange} /><br /></div>
<div>Age :<input  value={formdata.age}   name='age'     type="number" onChange={handlechange} /><br /></div>
<div>Password :<input  value={formdata.password} name='password' type="password" onChange={handlechange} /><br /></div>
<div>Email<input  value={formdata.email} name='email' type="email" onChange={handlechange} /><br /></div>
<div>Phone :<input  value={formdata.phone} name='phone' type="number" onChange={handlechange} /><br /></div>
<center><button>Submit</button></center>
</form>
    </div>
  )
}

export default Mutipleform