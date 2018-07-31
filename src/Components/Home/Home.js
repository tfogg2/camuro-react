import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import _ from 'lodash';



class Home extends Component {

  render(){
    return(
      <div className="home">
        <div className="home-bg"></div>
        <div className="home-content">
          <HomeCta />
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
