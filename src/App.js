import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import _ from 'lodash';
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js';
import Products from './Components/Products/Products.js';
import OfferForm from './Components/Offers/OfferForm.js';
import Brands from './Components/Brands.js';
import About from './Components/About.js';
import NotFound from './Components/NotFound.js';
import './App.css';

const products = [
  {
    title: "test",
    category: "lense",
  },
  {
    title: "canon",
    category: "body",
  }
]


class App extends Component {
  state = {
    products: products,
    brands: [],
  }

  onPressToggle = (category) => {
    this.setState({
      products: _.filter(products, {category: category})
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/products" render={() => <Products products={this.state.products} />} />
            <Route path="/brands" component={Brands} />} />
            <Route path="/sell" component={OfferForm} />} />
            <Route path="/about" component={About} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
