import React from 'react';
import { Link } from 'react-router-dom';
import './App3.css'

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <center>
            <Link to='/TP1'><center>Calculator</center></Link>
            <Link to='/TP2'><center>Slider</center></Link>
            <Link to='/TP3'><center>ToDo List</center></Link>
            <Link to='/TP4'><center>API</center></Link>
        </center>
      </nav>
      <h1><b><center>Hi <br />Welcome to Our Website</center></b></h1><br />
      <h2><center>All the TPs are here</center></h2><br /><center><h3><b>Enjoy The Moment</b></h3></center>
    </div>
  )
}
