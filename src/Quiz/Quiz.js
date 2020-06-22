import React, { Component } from "react";
import flourData from '../data-set';

class Quiz extends Component {
  constructor() {
    super()

    this.state = {
      currentSlide: undefined,
      remainingSlides: [],
      display: 'first',
      organic: undefined,
      user: undefined
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
    console.log(event.currentTarget)
    // event.preventDefault();
    // let { name, value } = event.currentTarget
    // console.log('testParam', name, value)
    this.props.stashSelection(event.currentTarget)
    // this.displaySlide()
    // this.props.adjustScore()
    // this.setState({ test: 'junior flour miller'})
  }

  handleFirstButton = (event) => {
    if (event.currentTarget.value === 'organic') {
      this.setState({ organic: true, display: 'second' })
    } else {
      this.setState({ organic: false, display: 'second' })
    }
  }

  handleSecondButton = (event) => {
    if (event.currentTarget.value === 'home') {
      this.setState({ user: 'retail', display: 'third' })
    } else if (event.currentTarget.value === 'restaurant') {
      this.setState({ user: 'wholesale', display: 'third' })
    } else if (event.currentTarget.value === 'retail') {
      this.setState({ user: 'wholesale', display: 'third' })
    } else {
      this.setState({ user: 'wholesale', display: 'third' })
    }
  }

  handleThirdButton = (event) => {

    console.log('test')
    // if (event.currentTarget.value === 'home') {
    //   this.setState({ user: event.currentTarget.value, display: 'third' })
    // } else if (event.currentTarget.value === 'restaurant') {
    //   this.setState({ user: event.currentTarget.value, display: 'third' })
    // } else if (event.currentTarget.value === 'retail') {
    //   this.setState({ user: event.currentTarget.value, display: 'third' })
    // } else {
    //   this.setState({ user: event.currentTarget.value, display: 'third' })
    // }
  }

  renderButtons = (slideState) => {
    switch (slideState) {
      case 'first':
        return <div>
          <h3>I am looking for:</h3>
          <button onClick={ this.handleFirstButton } value="organic">
            <p>Organic Flour</p>
          </button>
          <button onClick={ this.handleFirstButton } value="conventional">
            <p>Conventional Flour</p>
          </button>
        </div>
      case 'second':
        return <div>
          <h3>I am a: </h3>
          <button onClick={ this.handleSecondButton } value="home">
            <p>Home Baker</p>
          </button>
          <button onClick={ this.handleSecondButton } value="restaurant">
            <p>Restaurant</p>
          </button>
          <button onClick={ this.handleSecondButton } value="retail">
            <p>Retail Bakery</p>
          </button>
          <button onClick={ this.handleSecondButton } value="commercial">
            <p>Commercial Bakery</p>
          </button>
        </div>
      case 'third':
        return <div>
          <h3>I am baking: </h3>
          <button onClick={ this.handleThirdButton } value="cookies">
            <p>Cookies</p>
          </button>
          <button onClick={ this.handleThirdButton } value="bread">
            <p>Bread</p>
          </button>
          <button onClick={ this.handleThirdButton } value="hard rolls">
            <p>Hard Rolls</p>
          </button>
          <button onClick={ this.handleThirdButton } value="pastries">
            <p>Pastries</p>
          </button>
          <button onClick={ this.handleThirdButton } value="pizza">
            <p>Pizza</p>
          </button>
          <button onClick={ this.handleThirdButton } value="healthy pastries">
            <p>Healthy-ish Pastries</p>
          </button>
        </div>
      default:
        return <div>Hi mom!</div>
    }
  }

  // organicOrConventional = () => {
  //   // if ()
  // }

  renderOrganicProducts = (slideState) => {
    switch (slideState) {
      case '':
        
        break;
    
      default:
        return <div>You weren't suppposed to see this.</div>
    }
  }

  render() {

    let productRender 

    if (this.state.)

    // let slide = this.state.currentSlide
    // let slideSpace

    // if (this.state.currentSlide) {
    //   slideSpace = <div className="answer-panes">
    //     <h3>{ slide.question }</h3>
    //     <button onClick={ this.handleAnswer } name={'test name'} value={ slide.answers[0].value }>
    //       <p><img className="" src={ slide.answers[0].image } /></p>
    //       <p value="text">{ slide.answers[0].text }</p>
    //     </button>
    //     <button onClick={ this.handleAnswer } value={ slide.answers[1].value }>
    //       <p><img className="" src={ slide.answers[1].image } /></p>
    //       <p>{ slide.answers[1].text }</p>
    //     </button>
    //   </div>
    // } else {
    //   slideSpace = 'it got here'
    // }

    return (
      <section>
        { this.renderButtons(this.state.display) }
        { this.renderProduct() }
      </section>) 
  }
}

export default Quiz;