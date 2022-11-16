import React from 'react'
import logo from '../assets/planet.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="World" height="24px" width="24px" />
        <h3 className='navbar--heading'>my travel journal.</h3>

    </div>
  )
}

export default Navbar