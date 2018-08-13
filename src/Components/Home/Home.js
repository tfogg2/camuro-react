import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import Gallery from '../Gallery'
import About from '../About'
import OfferForm from '../Offers/OfferForm'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'
import scrollToComponent from 'react-scroll-to-component'
import Footer from '../Footer.js'



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
    const about = document.getElementById('about')
  }

  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    const galleryClass = this.state.loaded ? 'visible-gallery home-content' : 'home-content'
    return(
      <div className="home">
        <div className="header">
          <div className="logo">
            <h1>
              <Link exact="true" to="/">
                Camuro
              </Link>
            </h1>
          </div>
          <div className="nav">
            <div  className="right-nav">
              <ul className="navLinks">
                <li>
                  <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToComponent(this.Gallery, { offset: 0, align: 'top', duration: 1500})}>
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToComponent(this.OfferForm, { offset: 0, align: 'top', duration: 1500})}>
                    Sell
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={homeClass}></div>
        <HomeCta ref={(section) => { this.Home = section; }} />
        <About ref={(section) => { this.About = section; }}/>
        <div className="home-gallery" ref={(section) => { this.Gallery = section; }}>
          <div className={galleryClass}>
            <Gallery />
          </div>
        </div>
        <OfferForm ref={(section) => { this.OfferForm = section; }}/>
        <Footer ref={(section) => { this.Footer = section; }}/>
      </div>
    )
  }
}

export default Home;
