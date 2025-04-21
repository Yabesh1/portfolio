import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'>
        <h1 className='navbar-title'>Yabesh</h1>
      </a>
      <ul className='navbar-menu'>
        <a href='#about'>About </a>
        <a href='#experience'>Experience</a>
        <a href='#project'>Projects</a>
        <a href='#contact'>Contact</a>
      </ul>
      <a href='#contact'>
        <button>Connect With Me</button>
      </a>
    </div>
  )
}

export default Navbar