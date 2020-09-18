import React from 'react'
import { Link } from 'react-router-dom'

const Results = () => {
  return (
    <section className='hero is-fullheight with-navbar'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-1 has-text-centered has-text-black'>Results</h1>
          <Link to='/game'>
            <div className='box has-text-centered'>Click to start again</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Results