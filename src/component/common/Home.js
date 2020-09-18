import React from 'react'
import { getBackground } from '../../lib/api'


class Home extends React.Component {

  state = {
    image: null
  }


  async componentDidMount() {
    const response = await getBackground()
    this.setState({
      image: response.url
    })
    // console.log(response.data)
  }


  render() {

    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container"><img src={this.state.image} />
            <h1 className="title is-1 has-text-centered has-text-black">
              Quiz
            </h1>
          </div>
        </div>
      </section>

    )
  }

}

export default Home
