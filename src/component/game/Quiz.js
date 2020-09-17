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
    const incorrect_answer = incorrect_answers.map(result => (result))
        this.setState({
      incorrect_answers: incorrect_answer
    })  
  }




  render() {
    const { questions, answers, incorrect_answers } = this.state
    if ( !this.state.questions ) return null
    return (
      <section className="section">
        <div className="container">
          <div>{ questions[0] }</div>
          <div>{ answers[0] }</div>
          <div>{ incorrect_answers[0] }</div>
        </div>

      </section>

    )


  }
}

export default Quiz