import React from 'react'
import { getBackground } from '../../lib/api'


class Home extends React.Component {

  state = {
    image: null
  }


  async componentDidMount() {
    const response = await getBackground()
    console.log(response)
    this.setState({
      image: response.data.url
    })
    // console.log(response.data)
  }


  render() {

    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container" style={{ backgroundImage: `url(${this.state.image})` } } alt='space-image'>
            <h1 className="title is-1 has-text-centered has-text-white">
              Quiz
            </h1>
          </div>
        </div>
      </section>

    )
  }

}

export default Home
