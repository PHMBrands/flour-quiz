import React, { Component } from "react";
// import flourData from '../data-set';

class Quiz extends Component {
  constructor() {
    super()

    this.state = {
      currentSlide: undefined,
      remainingSlides: [],
      test: 'still learning'
    }
  }

  componentDidMount = () => {
    let shuffledSlides = this.shuffleSlides(this.props.slides);
    let currentSlide = shuffledSlides.pop();
    this.setState({ currentSlide, remainingSlides: shuffledSlides })
  }

  shuffleSlides = (data) => {
    return data.sort(() => 0.5 - Math.random());
  }

  displaySlide = () => {

  }


  handleAnswer = (event) => {
    event.preventDefault();
    this.props.adjustScore()
    this.setState({ test: 'junior flour miller'})
  }

  render() {

    let slide = this.state.currentSlide
    let slideSpace

    if (this.state.currentSlide) {
      slideSpace = <div className="answer-panes">
        <button onClick={ this.handleAnswer }>
          <p><img className="" src={ slide.answers[0].image } /></p>
          <p>{ slide.answers[0].text }</p>
        </button>
        <button>
          <p><img className="" src={ slide.answers[1].image } /></p>
          <p>{ slide.answers[1].text }</p>
        </button>
      </div>
    } else {
      slideSpace = 'it got here'
    }

    return (
      <div>
        { slideSpace }
      </div>) 
  }
}

export default Quiz;