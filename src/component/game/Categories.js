import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({ id, name }) => {
  return (
    <div id={id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/game/${id}`}>
        <div className='card'>
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

// https://opentdb.com/api.php?amount=10&category=10&type=multiple
// https://opentdb.com/api.php?amount=10&category=11&type=multiple
// https://opentdb.com/api.php?amount=10&category=12&type=multiple
// https://opentdb.com/api.php?amount=10&category=15&type=multiple
// https://opentdb.com/api.php?amount=10&category=17&type=multiple
// https://opentdb.com/api.php?amount=10&category=18&type=multiple
// https://opentdb.com/api.php?amount=10&category=23&type=multiple
// https://opentdb.com/api.php?amount=10&category=25&type=multiple
// https://opentdb.com/api.php?amount=10&category=27&type=multiple
// https://opentdb.com/api.php?amount=10&category=31&type=multiple

export default Categories