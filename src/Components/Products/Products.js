import React, { Component } from 'react'
import Product from './Product.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import _ from 'lodash';



const ProductItem = ({ category, title }) => (
  <div className="category__list-item box flex-spread">
    {title}
    <div className={`category--${category} circle`} />
  </div>
);
const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, title }) => (
        <ProductItem key={`ProductItems-${title}`} category={category} title={title} />
      ))}
  </div>
);

const ButtonCategories = (productCategories, setCategory ) => (
  productCategories.map((category) => (
      <li>
        <NavLink to={'/products/' + category} key={category} className={`btn-${category}`} onClick={() => setCategory(category)}>
          {category}
        </NavLink>
      </li>
      ))
);

const UI = ({
  state,
  state: { productCategories },
  setCategory,
  allProducts
}) => (
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Category</h3>
      {ButtonCategories(productCategories, setCategory )}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <ProductItems state={state} />
    </div>
  </div>
);

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
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
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

// data
const PRODUCTS = [
  { title: "Nikon 35mm", category: "Lense" },
  { title: "Canon Rebel", category: "Body" },
  { title: "Strap", category: "Accessory" },
]

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

export default Products
