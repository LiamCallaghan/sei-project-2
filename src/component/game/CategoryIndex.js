import React from 'react'

import { getAllCategories } from '../../lib/api'

import Categories from './Categories'

class CategoryIndex extends React.Component {
  state = {
    categories: null
  }

  async componentDidMount() {
    const response = await getAllCategories()
    this.setState({
      categories: response.data
    })
  }

  render() {
    if (!this.state.categories) return null 
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiple">
            {this.state.categories.map(category => (<Categories key={category.id} {...category}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryIndex