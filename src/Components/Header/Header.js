import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div className="header">

        <div className="logo">
          <h1>
            <Link exact="true" to="/">
              Camuro
            </Link>
          </h1>
        </div>

        <div className="nav">
          <div  className="right-nav">
            <ul className="navLinks">
              <li>
                <NavLink to="/products">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/brands">
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/sell">
                  Sell
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Header;
