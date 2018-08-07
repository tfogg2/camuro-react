import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import _ from 'lodash'

import { bindActionCreators } from 'redux'
import * as CartActionCreators from './Actions/Cart'
import { connect } from 'react-redux'

import Cart from './Components/Cart'
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js'
import Products from './Components/Products/Products.js'
import Product from './Components/Products/Product.js'
import OfferForm from './Components/Offers/OfferForm.js'
import Brands from './Components/Brands.js'
import About from './Components/About.js'
import NotFound from './Components/NotFound.js'
import Footer from './Components/Footer.js'
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
  }

  render() {
    const {dispatch, cartProducts, total} = this.props
    const addProduct = bindActionCreators(CartActionCreators.addProduct, dispatch)
    const removeProduct = bindActionCreators(CartActionCreators.removeProduct, dispatch)

    return (
      <BrowserRouter>
        <div className="App">
          <Header addProduct={addProduct} removeProduct={removeProduct}/>
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/cart" render={() => <Cart removeProduct={removeProduct} cartProducts={cartProducts} total={total}/>} />
            <Route path="/products" render={() => <Products addProduct={addProduct}/>} />
            <Route path="/product/:title" component={Product} />} />
            <Route path="/brands" component={Brands} />} />
            <Route path="/sell" component={OfferForm} />} />
            <Route path="/about" component={About} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => (
  {
    cartProducts: state.cartProducts,
    total: state.total
  }
)

export default connect(mapStateToProps)(App);
