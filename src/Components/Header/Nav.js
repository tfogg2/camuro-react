import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class Nav extends Component {
  render(){
    return(
      <div  className="right-nav">
        <ul className="nav-NavLinks">
          <NavLink tag="li" to="/products/cameras">
            Cameras
          </NavLink>
          <NavLink tag="li" to="/products/accessories">
            Accessories
          </NavLink>
          <NavLink tag="li" to="/brands">
            Brands
          </NavLink>
          <NavLink tag="li" to="/sell" class="sell">
            Sell
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Nav;
