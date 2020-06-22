import React, { Component } from "react";
// import flourData from '../data-set';

class Quiz extends Component {
  constructor() {
    super()

    this.state = {
      currentSlide: undefined,
      remainingSlides: [],
      display: 'first',
      organic: undefined,
      user: undefined,
      displayProduct: false,
      product: ''
    }
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
    this.setState({ displayProduct: true, display: 'disappear', product: event.currentTarget.value})
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
      case 'disappear':
        return null
      default:
        return <div>Hi mom!</div>
    }
  }

  renderOrganicRetail = () => {
    switch (this.state.product) {
      case 'cookies':
        return <div className="product-box">
            <p>Organic All Purpose Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

      case 'bread':
        return <div className="product-box">
            <p>Organic Bread Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

          
      case 'hard rolls':
        return <div className="product-box">
            <p>Organic High Gluten Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        
            
      case 'pastries':
        return <div className="product-box">
            <p>Organic Baker's Patent</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'pizza':
        return <div className="product-box">
            <p>Organic High Gluten</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'healthy pastries':
        return <div className="product-box">
            <p>Organic Whole Wheat</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      default:
        return <div></div>
    }
  }

  renderConventionalRetail = () => {
    switch (this.state.product) {
      case 'cookies':
        return <div>
            <p>Organic All Purpose Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

      case 'bread':
        return <div>
            <p>Organic Bread Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

          
      case 'hard rolls':
        return <div>
            <p>Organic High Gluten Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        
            
      case 'pastries':
        return <div>
            <p>Organic Baker's Patent</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'pizza':
        return <div>
            <p>Organic High Gluten</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'healthy pastries':
        return <div>
            <p>Organic Whole Wheat</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      default:
        return <div></div>
    }
  }

  renderOrganicWholesale = () => {
    switch (this.state.product) {
      case 'cookies':
        return <div>
            <p>Organic All Purpose Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

      case 'bread':
        return <div>
            <p>Organic Bread Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

          
      case 'hard rolls':
        return <div>
            <p>Organic High Gluten Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        
            
      case 'pastries':
        return <div>
            <p>Organic Baker's Patent</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'pizza':
        return <div>
            <p>Organic High Gluten</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'healthy pastries':
        return <div>
            <p>Organic Whole Wheat</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      default:
        return <div></div>
    }
  }

  renderConventionalWholesale = () => {
    switch (this.state.product) {
      case 'cookies':
        return <div>
            <p>Organic All Purpose Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

      case 'bread':
        return <div>
            <p>Organic Bread Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>

          
      case 'hard rolls':
        return <div>
            <p>Organic High Gluten Flour</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        
            
      case 'pastries':
        return <div>
            <p>Organic Baker's Patent</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'pizza':
        return <div>
            <p>Organic High Gluten</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      case 'healthy pastries':
        return <div>
            <p>Organic Whole Wheat</p>
            <p>about</p>
            <button>BUY NOW</button>
          </div>        

      default:
        return <div></div>
    }
  }

  renderProductHelper = () => {
    if (this.state.organic && this.state.user === 'retail') {
      return this.renderOrganicRetail()
    } else if (!this.state.organic && this.state.user === 'retail') {
      return this.renderConventionalRetail()
    } else if (this.state.organic && this.state.user === 'wholesale') {
      return this.renderOrganicWholesale()
    } else if (!this.state.organic && this.state.user === 'wholesale') {
      return this.renderConventionalWholesale()
    } else {
      return null
    }
  }

  render() {
    let productRender 

    if (this.state.displayProduct) {
      productRender = this.renderProductHelper()
    } else {
      productRender = null
    }

    return (
      <section className="quiz-section">
        { this.renderButtons(this.state.display) }
        { productRender }
      </section>) 
  }
}

export default Quiz;