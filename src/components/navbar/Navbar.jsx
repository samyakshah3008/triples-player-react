import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav className='nav-container'>
            <div className="nav-logo">TripleS Player</div>
            <button className="login-btn">Login</button>
        </nav>
    </div>
  )
}
