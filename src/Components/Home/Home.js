import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Fade from 'react-reveal/Fade';
import _ from 'lodash'



class Home extends Component {

  state = {
    loaded: false
  }
  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 100 )
  }



  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    return(
      <div className="home">
        <div className={homeClass}></div>
        <HomeCta />
        <div className="home-content">
          <div className="home-brands"></div>
          <div className="home-product-types">
            <Fade bottom>
              <Link to="products/lenses">
                <div className="product-type lens-image">
                  <div className="type-cover"></div>
                  <h3> Lenses </h3>
                </div>
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="products/bodies">
                <div className="product-type body-image">
                  <div className="type-cover"></div>
                  <h3> Bodies </h3>
                </div>
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="products/accessories">
                <div className="product-type accessory-image">
                  <div className="type-cover"></div>
                  <h3> Accessories </h3>
                </div>
              </Link>
            </Fade>
          </div>
          <div className="featured-container">
            <div className="featured">
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
              <Fade left>
                <div className="featured-product">

                </div>
              </Fade>
            </div>
          </div>
          <div className="home-insta"></div>
          <Fade bottom>
            <div className="home-bottom-cta">
              <h2> Sell your old cameras! </h2>
              <p> We will buy your shit </p>
            </div>
          </Fade>
        </div>

      </div>
    )
  }
}

export default Home;
