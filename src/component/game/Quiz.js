import React from 'react'
import { getSingleCategory } from '../../lib/api'

class Quiz extends React.Component {
  state = {
    categories: null,
    questions: [],
    answers: [],
    incorrectAnswers: [],
    results: null,
    number: 0,
    score: 0
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
    const incorrectAnswers = this.state.categories.results.map(result => (result.incorrect_answers))
    this.setState({
      incorrectAnswers
    })
  }
  handleClick = async () => {
    if (this.state.number >= 9) {
      // console.log('WORKING')
      this.props.history.push('./results')
    }
    const number = this.state.number += 1
    const score = this.state.score += 1
    this.setState({ number, score })
  }

  handleClick2 = async () => {
    if (this.state.number >= 9) {
      // console.log('WORKING')
      this.props.history.push('./results')
    }
    const number = this.state.number += 1
    this.setState({ number })
  }


  render() {
    if (!this.state.questions) return null


    const { questions, answers, incorrectAnswers, number, score } = this.state
    const index = number
    const answersArray = incorrectAnswers[index]

    console.log(index)
    return (
      <section className="section">
        <div className="container">
          <div>{questions[index]}</div>
          <div>
            <button onClick={this.handleClick}>{answers[index]}</button>
            {answersArray && answersArray.map(item => {
              return <button onClick={this.handleClick2} key={item}>{item}</button>
            })}
          </div>
          <div>Score: {score}</div>
        </div>
      </section>
    )
  }
}
export default Quiz