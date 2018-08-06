import React, {PropTypes} from 'react'

const Cart = props => {
  return (
    <div className="cart">
      <div className="cart-content">
        {props.cartProducts.map((product, index) => (
          <div className="product-title">
            <a className="remove-product" onClick={ () => props.removeProduct(index)}>✖</a>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;
