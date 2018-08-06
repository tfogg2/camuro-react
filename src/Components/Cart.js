import React, {PropTypes} from 'react'
import { Link } from 'react-router-dom'

const Cart = props => {
  const products = props.cartProducts
  if(products.length > 0 ){
    return (
      <div className="cart">
        <table className="cart-content">
          <td><b>Title</b></td>
          <td><b>Description</b></td>
          <td><b>Price</b></td>
          <td><b>Remove</b></td>
          {props.cartProducts.map((product, index) => (
              <tr className="cart-product">
                <td className="cart-product-title">
                  <h3>{product.title}</h3>
                </td>
                <td className="cart-product-description">
                  <p>{product.description}</p>
                </td>
                <td className="cart-product-price">
                  <span>${product.price}</span>
                </td>
                <td className="remove-product">
                  <a className="remove-product" onClick={ () => props.removeProduct(index)}>✖</a>
                </td>
              </tr>
          ))}
        </table>
        <Link to="/products">Continue Shopping</Link>
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
