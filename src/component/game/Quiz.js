import React from 'react'

import { getSingleCategory } from '../../lib/api'

class Quiz extends React.Component {
  state = {
    categories: null,
    questions: [],
    answers: [],
    incorrect_answers: [], 
    results: null
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
    // this.incorrectLoop2()

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
    }, this.incorrectLoop2)
  }

  incorrectLoop2 = () => {
    // console.log(this.state)
    const incorrect_answer = this.state.incorrect_answers.map(result => result)
    const answerPull = incorrect_answer.map(item => item)
    const answerPull2 = answerPull.map(answer => answer)
    console.log(answerPull2)
    this.setState({
      incorrect_answers: incorrect_answer
    })
    // console.log(incorrect_answer)
  }

  // results = (event) => {
  //   if (this.event.value === correctAnswer) {
  //     const gatherResult += 1
  //   }
  // }




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