import React, { Component } from 'react';
import Logo from './Logo.js';
import Nav from './Nav.js';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Logo />
        <Nav />
      </div>
    )
  }
}

export default Header;
