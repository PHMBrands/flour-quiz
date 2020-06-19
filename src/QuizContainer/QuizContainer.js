import React, { Component } from 'react';
import Quiz from '../Quiz/Quiz';
import flourData from '../data-set';


class QuizContainer extends Component {
  constructor() {
    super()

    this.state = {
      selections: {}
    }
  }

  // componentDidMount = () => {
  //   let randomizedSlides = this.shuffle(flourData.slides)
  //   this.setState({ randomizedSlides })
  // }

  testFunc = () => {

    console.log('test');
  }

  stashSelection = (paramTest) => {
    let { name, value } = paramTest
    let selections = {...this.state.selections, [name]: value}
    this.setState({ selections })
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