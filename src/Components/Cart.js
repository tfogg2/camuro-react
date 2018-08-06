import React, {PropTypes} from 'react'
import { Link } from 'react-router-dom'

const Cart = props => {
  const products = props.cartProducts
  if(products.length > 0 ){
    return (
      <div className="cart">
        <div className="cart-content">
          {props.cartProducts.map((product, index) => (
            <div className="cart-product">
              <div className="cart-product-title">
                <h3>{product.title}</h3>
              </div>
              <div className="cart-product-description">
                <p>{product.description}</p>
              </div>
              <div className="remove-product">
                <a className="remove-product" onClick={ () => props.removeProduct(index)}>✖</a>
              </div>
              <div className="cart-product-price">
                <span>${product.price}</span>
              </div>
            </div>
          ))}
          <Link to="/products">Continue Shopping</Link>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="cart">
        <h3><Link to="/products">Add some products!</Link></h3>
      </div>
    )
  }

}

export default Cart;
