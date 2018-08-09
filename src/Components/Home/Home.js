import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import Gallery from '../Gallery'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Fade from 'react-reveal/Fade'
import _ from 'lodash'
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
  }



  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    return(
      <div className="home">
        <div className={homeClass}></div>
        <HomeCta />
        <div className="home-content">
          <Gallery />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
