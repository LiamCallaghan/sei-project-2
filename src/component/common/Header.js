import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/game" className="navbar-item">Catagories Index</Link>
          {/* <Link to="/game/:id" className="navbar-item">Quiz</Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Header