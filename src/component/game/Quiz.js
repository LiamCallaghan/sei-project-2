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
    })
  }
  // incorrectLoop2 = () => {
  //   // console.log('this.state', this.state)
  //   console.log('this.state.incorrect_answers', this.state.incorrect_answers)
  //   const incorrect_answer = this.state.incorrect_answers.map(result => {
  //     return result
  //   })
  //   console.log('incorrectAnswer[0]', incorrect_answer[0][0])
  //   console.log('incorrect_answer', incorrect_answer)
  //   // const answerPull = incorrect_answer.map(item =>  item[0])
  //   // console.log('answerPull', answerPull)
  //   this.setState({
  //     incorrect_answers: incorrect_answer
  //   })
  // }
  // results = (event) => {
  //   if (this.event.value === correctAnswer) {
  //     const gatherResult += 1
  //   }
  // }
  render() {
    if (!this.state.questions) return null
    const { questions, answers, incorrect_answers } = this.state
    const answersArray = incorrect_answers[0]
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
          <div>
            {/* <button>{incorrect_answers}</button> */}
            {/* <button>{this.state.incorrect_answers[0][1]}</button>
            <button>{this.state.incorrect_answers[0][2]}</button> */}
          </div>
        </div>
      </section>
    )
  }
}
export default Quiz