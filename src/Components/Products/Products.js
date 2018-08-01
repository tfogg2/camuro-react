import React, { Component } from 'react'
import Product from './Product.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import _ from 'lodash';



const ProductItem = ({ category, title, description }) => (
  <div className="product">
    <div className="product-image"></div>
    <div className="product-title">
      <h2>{title}</h2>
    </div>
    <div className="product-description">
      <p>{description}</p>
    </div>
  </div>
);
const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "All"
      )
      .map(({ category, title, description }) => (
        <ProductItem key={`ProductItems-${title}`} category={category} title={title} description={description} />
      ))}
  </div>
);

const ListCategories = (productCategories, setCategory ) => (
  productCategories.map((category) => (
      <li>
        <NavLink to={'/products/' + category} key={category} className={`${category}`} onClick={() => setCategory(category)}>
          {category}
        </NavLink>
      </li>
      ))
);

const UI = ({
  state,
  state: { productCategories },
  setCategory,
  AllProducts
}) => (
  <div className="content">
    <ul className="product-nav">
      {ListCategories(productCategories, setCategory )}
    </ul>
    <div className="products">
      <ProductItems state={state} />
    </div>
  </div>
);

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "All",
      products: PRODUCTS,
      productCategories: PRODUCT_CATEGORIES
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} className />;
  }
}

// data
const PRODUCTS = [
  { title: "Nikon 35mm", description: "This is an example description about some camera shenanigans.", category: "Lenses" },
  { title: "Canon Rebel", description: "This is an example description about some camera shenanigans.", category: "Bodies" },
  { title: "Strap", description: "This is an example description about some camera shenanigans.", category: "Accessories" },
  { title: "Canon Prime 100mm", description: "This is an example description about some camera shenanigans.", category: "Lenses" },
  { title: "Sony Body", description: "This is an example description about some camera shenanigans.", category: "Bodies" },
  { title: "Shutter Button", description: "This is an example description about some camera shenanigans.", category: "Accessories" },

]

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("All");
PRODUCT_CATEGORIES.sort();

export default Products
