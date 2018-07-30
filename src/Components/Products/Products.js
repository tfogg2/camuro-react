import React, { Component } from 'react'
import Product from './Product.js'
import _ from 'lodash';

const products = [
  {
    title: "test",
    category: "lense",
  },
  {
    title: "Canon",
    category: "body",
  }
]


class Products extends Component {
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
      <div className="products">
        {this.state.products.map(product => {
          <Product product={product} />
        })}
        <button onClick={this.onPressToggle('lense')}> Lenses</button>
      </div>
    )
  }
}

export default Products
