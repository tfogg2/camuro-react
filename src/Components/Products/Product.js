import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class Product extends Component {
  render(){
    return(
      <div className="product">
        <div className="product-image"></div>
        <div className="product-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="product-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Product;
