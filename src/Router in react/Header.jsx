import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
   function gotopage(){
    navigate("/products")
  }
  return (  <> 
    <nav > </nav>
    <div className='header'>
        <h1> Header </h1>
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link> 
        <Link to="/contact"> Contact </Link> 
        <button onClick={gotopage}>Product</button>
    </div>
    
  </>
  )
}

export default Header;