import React, { Component } from 'react';
import Product from './Product.js';

class Products extends Component {
  render(){
    return(
      <div className="products">
        <Product />
      </div>
    )
  }
}

export default Products;
