import React from 'react'
import { getSingleCategory } from '../../lib/api'
class Quiz extends React.Component {
  state = {
    categories: null,
    questions: [],
    answers: [],
    incorrectAnswers: [], 
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

  render() {
    if (!this.state.questions) return null
    const { questions, answers, incorrectAnswers } = this.state
    const answersArray = incorrectAnswers[0]
    return (
      <section className="section">
        <div className="container">
          <div>{questions[0]}</div>
          <div>
            <button>{answers[0]}</button>
            {answersArray && answersArray.map(item => {
              return <button key={item}>{item}</button>
            })}
          </div>
        </div>
      </section>
    )
  }
}
export default Quiz