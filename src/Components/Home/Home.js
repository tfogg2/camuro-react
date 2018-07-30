import React, { Component } from 'react'
import HomeCta from './HomeCta.js'
import Products from '../Products/Products.js'
import _ from 'lodash';

const products = [
  {
    title: "test",
    category: "lense",
  },
  {
    title: "canon",
    category: "body",
  }
]

class Home extends Component {
  state = {
    products: products
  }

  onPressToggle = (category) => {
    this.setState({
      products: _.filter(products, {category: category})
    })
  }

  render(){
    return(
      <div className="home">
        <div className="home-bg"></div>
        <div className="home-content">
          <HomeCta />
          <div className="home-brands">
            <button onClick={(e) => this.onPressToggle('lense')}>Lenses</button>
          </div>
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
