import React, { Component } from 'react';

class Product extends Component {
  render(){
    return(
      <div className="product">
        <h3>{this.props.product.title}</h3>
        <p>{this.props.product.category}</p>
      </div>
    )
  }
}

export default Product;
