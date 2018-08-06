import React, { Component } from 'react'
import Product from './Product.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import _ from 'lodash';








const ListCategories = (productCategories, setCategory ) => (
  productCategories.map((category) => {
    const cat = category === "All" ? '' : category
    return (
      <li>
        <NavLink exact="true" to={'/products/' + cat} key={category} className={`${category}`} onClick={() => setCategory(category)}>
          {category}
        </NavLink>
      </li>
    )
  })
)



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
    })
  }
  setProduct(category, title, description) {
    this.setState({
      category: category
    })
  }
  render() {
    const ProductItem = ({ product, category, title, description, price, key }) => (
      <div className="product">
        <div className="product-image"></div>
        <div className="product-title">
          <h2>{title}</h2>
        </div>
        <div className="product-description">
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <Link to={`/cart`} className="add-product" onClick={ () => this.props.addProduct(product)}>Add Product</Link>
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
          .map(({ product, category, title, description, price, index }) => (
            // <Link to={`/product/${title}`} component={Product}>
            <Product key={`ProductItems-${title}`} product={product} index={index} category={category} title={title} description={description} price={price} addProduct={this.props.addProduct} />
            // </Link>
          ))}
      </div>
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
    )
    return <UI setCategory={this.setCategory} state={this.state} className />;
  }
}

// data
const PRODUCTS = [
  { title: "Nikon 35mm", description: "This is an example description about some camera shenanigans.", category: "Lenses", price: "100" },
  { title: "Canon Rebel", description: "This is an example description about some camera shenanigans.", category: "Bodies", price: "100" },
  { title: "Strap", description: "This is an example description about some camera shenanigans.", category: "Accessories", price: "100" },
  { title: "Canon Prime 100mm", description: "This is an example description about some camera shenanigans.", category: "Lenses", price: "100" },
  { title: "Sony Body", description: "This is an example description about some camera shenanigans.", category: "Bodies", price: "100" },
  { title: "Shutter Button", description: "This is an example description about some camera shenanigans.", category: "Accessories", price: "100" },
]

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("All");
PRODUCT_CATEGORIES.sort();

export default Products
