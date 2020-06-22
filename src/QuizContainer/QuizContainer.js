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

  stashSelection = (paramTest) => {
    let { name, value } = paramTest
    let selections = {...this.state.selections, [name]: value}
    this.setState({ selections })
  }

  render() {
    return (
    <div>
      <Quiz 
        slides={ flourData.slides }
        stashSelection={ this.stashSelection }
      />
    </div>
    )
  }
}

export default QuizContainer;