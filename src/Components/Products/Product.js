import React, { Component } from 'react';

class Product extends Component {
  render(){
    return(
      <div className="product">
        <h3>{this.props.title}</h3>
        <p>{this.props.category}</p>
      </div>
    )
  }
}

export default Product;
