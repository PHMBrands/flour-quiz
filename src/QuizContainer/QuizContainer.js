import React, { Component } from 'react';
import Quiz from '../Quiz/Quiz';
import flourData from '../data-set';


class QuizContainer extends Component {
  constructor() {
    super()

    this.state = {
      selections: 0
    }
  }

  // componentDidMount = () => {
  //   let randomizedSlides = this.shuffle(flourData.slides)
  //   this.setState({ randomizedSlides })
  // }

  testFunc = () => {

    console.log('test');
  }

  stashSelection = () => {
    console.log('good test');
  }

  render() {
    return (
    <div>
      <button onClick={ this.testFunc }>Test FUNK</button>
      <Quiz 
        slides={ flourData.slides }
        stashSelection={ this.stashSelection }
      />
    </div>
    )
  }
}

export default QuizContainer;