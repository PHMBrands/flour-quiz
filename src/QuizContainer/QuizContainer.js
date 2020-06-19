import React, { Component } from 'react';
import Quiz from '../Quiz/Quiz';
import flourData from '../data-set';


class QuizContainer extends Component {
  constructor() {
    super()

    this.state = {
      currentScore: 0
    }
  }

  // componentDidMount = () => {
  //   let randomizedSlides = this.shuffle(flourData.slides)
  //   this.setState({ randomizedSlides })
  // }

  testFunc = () => {

    console.log('test');
  }

  adjustScore = () => {
    console.log('good test');
  }

  render() {
    return (
    <div>
      <button onClick={ this.testFunc }>Test FUNK</button>
      <Quiz 
        slides={ flourData.slides }
        adjustScore={ this.adjustScore }
      />
    </div>
    )
  }
}

export default QuizContainer;