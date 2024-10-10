// import { useState } from 'react'
import React from 'react'
// import Mutipleform from './Mutipleform'
// import Routing from './Router in react/Routing'
// import UseEffect from './UseEffect'
// import "./App.css"
// import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'

// import Contact from './Contact'
// import Home from './Router in react/Home'
// import Products from './Products'
// import Service from './Service'
// import Header from './Router in react/Header'
// import Footer from './Footer'
import Usestatehook from './HOOKS/Usestatehook'
import Usereducerhook from './HOOKS/Usereducerhook'

function App() {
 

  return (
    <>
   
{/* <Usereducerhook /> */}

   <Usestatehook />
{/* 
   <Router>

   <Header /> 
   
       <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/contact" element={<Contact/>}/> 
         <Route path="service" element={<Service />}/>   
         <Route path="/products" element={<Products />}/> 
       </Routes> 
       <Footer />
    </Router>  */}
   
{/* <Routing /> */}


{/* <Mutipleform /> */}


    {/* <Formhandle /> */}
    
       {/* <UseEffect /> */}
    </>
  )
}

export default App
