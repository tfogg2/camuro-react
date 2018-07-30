import React, { Component } from 'react';

class Product extends Component {
  render(){
    return(
      <div className="product">
      <h3>{this.props.product.title}</h3>
        {this.props.product.title}
      </div>
    )
  }
}

export default Product;
