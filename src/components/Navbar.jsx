import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='links'>
          <Link className='link' to='/contact'><h6>Contact</h6></Link>
          <Link className='link' to='/skills'><h6>Skill</h6></Link>
          <Link className='link' to='/project'><h6>Project</h6></Link>
          <Link className='link' to='/info'><h6>Info</h6></Link>
          <Link className='link' to='/'> <h6>Home</h6> </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar