import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div className="header">

        <div className="logo">
          <Link tag="h1" to="/">
            Camuro
          </Link>
        </div>

        <div className="nav">
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
        </div>

      </div>
    )
  }
}

export default Header;
