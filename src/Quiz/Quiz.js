import React, { Component } from "react";
import flourData from '../data-set';

class Quiz extends Component {
  constructor() {
    super()

    this.state = {
      currentSlide: undefined,
      remainingSlides: [],
      display: 'first'
    }
  }

  componentDidMount = () => {
    let currentSlide = this.props.slides.shift();
    let remainingSlides = this.props.slides
    this.setState({ currentSlide, remainingSlides })
    // this.displaySlide()
  }

  displaySlide = () => {
    //this should create an array of buttons using this.state.currentSlide
  }

  // nextSlide = () => {
  //   let currentSlide = this.props.slides.shift();
  //   let remainingSlides = this.props.slides
  //   this.setState({ currentSlide, remainingSlides })
  // }

  // shuffleSlides = (data) => {
  //   return data.sort(() => 0.5 - Math.random());
  // }

  displaySlide = () => {
    let currentSlide = this.state.remainingSlides.shift();
    this.setState({ currentSlide })
  }


  handleAnswer = (event) => {
    // event.preventDefault();
    // let { name, value } = event.currentTarget
    // console.log('testParam', name, value)
    this.props.stashSelection(event.currentTarget)
    // this.displaySlide()
    // this.props.adjustScore()
    // this.setState({ test: 'junior flour miller'})
  }

  renderButtons = (slideState) => {
    let slideOne = flourData.slides[0]

    switch (slideState) {
      case 'first':
        return <div>
          <h3>{ slideOne.question }</h3>
          {/* <button onClick={ this.handleAnswer } name={'test name'} value={ slide.answers[0].value }>
            <p value="text">{ slide.answers[0].text }</p>
          </button>
          <button onClick={ this.handleAnswer } value={ slide.answers[1].value }>
            <p>{ slide.answers[1].text }</p>
          </button> */}
        </div>
      default:
        return <div>Hi mom!</div>
    }
  }

  render() {

    let slide = this.state.currentSlide
    let slideSpace

    if (this.state.currentSlide) {
      slideSpace = <div className="answer-panes">
        <h3>{ slide.question }</h3>
        <button onClick={ this.handleAnswer } name={'test name'} value={ slide.answers[0].value }>
          <p><img className="" src={ slide.answers[0].image } /></p>
          <p value="text">{ slide.answers[0].text }</p>
        </button>
        <button onClick={ this.handleAnswer } value={ slide.answers[1].value }>
          <p><img className="" src={ slide.answers[1].image } /></p>
          <p>{ slide.answers[1].text }</p>
        </button>
      </div>
    } else {
      slideSpace = 'it got here'
    }

    return (
      <section>
        { this.renderButtons(this.state.display) }
      </section>) 
  }
}

export default Quiz;