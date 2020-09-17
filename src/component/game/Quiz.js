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
    // console.log(response.data)
    { this.questionLoop() }

  }

  questionLoop = () => {
    const questions = this.state.questions.results.map(result => (result.question))
    return questions   
  }
  answerLoop = () => {
    const answer = this.state.questions.results.map(result => (result.correct_answer))
    return answer  
  }
  incorrectLoop = () => {
    const incorrectAnswers = this.state.questions.results.map(result => (result.incorrect_answers))
    const incorrectAnswer = incorrectAnswers.map(result => (result))
    return incorrectAnswer  

  }


  render() {
    if ( !this.state.questions ) return null
    return (
      <section className="section">
        <div className="container">
          {this.questionLoop().map(question => (<h1 key={[question]}>{question}</h1>))}
          {this.answerLoop().map(answer => (<h1 key={[answer]}>{answer}</h1>))}
          {this.incorrectLoop().map(wrong => (<h1 key={[wrong]}>{wrong}</h1>))}
        </div>

      </section>

    )


  }
}

export default Quiz