import React from 'react'

import { getAllCategories } from '../../lib/api'

import Categories from './Categories'

class CategoryIndex extends React.Component {
  state = {
    categories: null
  }

  async componentDidMount() {
    const response = await getAllCategories()
    const filterResponse = response.data.trivia_categories.filter(category => (category.id === 12 || category.id === 10 || category.id === 15 || category.id === 17 || category.id === 18 || category.id === 23 || category.id === 25 || category.id === 27 || category.id === 31 || category.id === 11))
    this.setState({
      categories: filterResponse
    })
    console.log(this.state.categories.trivia_categories)
    console.log(this.state.categories)
  }

  render() {
    if (!this.state.categories) return null 
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline is-centered">
            { this.state.categories.map(category => (<Categories key={category.id} {...category} /> ) ) }
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryIndex