import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <center>
            <Link to='/TP1'>Calculator</Link>
            <Link to='/TP2'>Slider</Link>
            <Link to='/TP3'>ToDo List</Link>
            <Link to='/TP4'>API</Link>
        </center>
      </nav>
    </div>
  )
}
