import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='googl-navbar'>
        <div className='googl-logo' >
        <Link to='/googl'>
            <p>Googl 🔍</p>
        </Link>
        </div>
        <Search/>
    </nav>
  )
}
