import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Logo extends Component {
  render(){
    return(
      <div className="logo">
        <Link tag="h1" to="/">
          Camuro
        </Link>
      </div>
    )
  }
}

export default Logo;
