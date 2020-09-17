import React from 'react'

import { getSingleCategory } from '../../lib/api'

class Quiz extends React.Component {
  state = {
    questions: null
  }

  async componentDidMount() {
    const catagoryId = this.props.match.params.id
    const response = await getSingleCategory(catagoryId)
    this.setState({
      questions: response.data
    })
    console.log(response.data)
  }

  render() {
    if ( !this.state.questions ) return null
    return <div>{this.state.questions}</div>
  }
}

export default Quiz