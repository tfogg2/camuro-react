import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
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
          <div className="home-product-types"></div>
          <div className="home-featured"></div>
          <div className="home-insta"></div>
          <div className="home-bottom-cta"></div>
        </div>

      </div>
    )
  }
}

export default Home;
