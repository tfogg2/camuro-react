import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js';
import Products from './Components/Products/Products.js';
import Cameras from './Components/Products/Cameras.js';
import OfferForm from './Components/Offers/OfferForm.js';
import './App.css';



class App extends Component {
  state = {
    products: [],
    brands: [],
    offers: []
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/products" render={() => <Products products={this.state.products}/>} />
          <Route path="/products/cameras" render={() => <Cameras />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
