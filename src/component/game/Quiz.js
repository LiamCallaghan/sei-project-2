import React from 'react'

import { getSingleCategory } from '../../lib/api'

class Quiz extends React.Component {
  state = {
    categories: null,
    questions: [],
    answers: [],
    incorrect_answers: []
  }

  async componentDidMount() {
    const catagoryId = this.props.match.params.id
    const response = await getSingleCategory(catagoryId)
    this.setState({
      categories: response.data
    })
    this.questionLoop()
    this.answerLoop()
    this.incorrectLoop()
    this.incorrectLoop2()

  }

  questionLoop = () => {
    const questions = this.state.categories.results.map(result => (result.question))
    this.setState({
      questions
    })
  }
  answerLoop = () => {
    const answers = this.state.categories.results.map(result => (result.correct_answer))
    this.setState({
      answers
    })
  }
  incorrectLoop = () => {
    const incorrect_answers = this.state.categories.results.map(result => (result.incorrect_answers))
    this.setState({
      incorrect_answers
    })
  }

  incorrectLoop2 = () => {
    const incorrect_answer = this.state.categories.incorrect_answers.map(result => (result))
    this.setState({
      incorrect_answers: incorrect_answer
    })
    console.log(incorrect_answer)
  }




  render() {
    const { questions, answers, incorrect_answers } = this.state
    if (!this.state.questions) return null
    return (
      <section className="section">
        <div className="container">
          <div>{questions[0]}</div>
          <div>
            <button>{answers[0]}</button>
          </div>
          <div>
            <button>{this.state.incorrect_answers.map(answer => (answer))}</button>

          </div>
        </div>

      </section>

    )


  }
}

export default Quiz