import React from 'react'
import './topnavbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'

export  function TopNavbar() {
    
  return (
   <>
   <div className='container-fluid'>
       <Navbar  className='bg-dark fixed-top navbar'>
             <Navbar.Brand >
                 <img src={process.env.PUBLIC_URL+'favicon.ico'}
                 height='30px'
                 ></img>
             </Navbar.Brand>
             <Navbar.Text className='navtext ' >
                 Welcome to Honey Restaurant
             </Navbar.Text>

       </Navbar>

   </div>
  
   </>
  )
}