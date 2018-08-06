import * as CartActionTypes from '../ActionTypes/Cart'

export const addProduct = (title, category, description, price, index) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    title,
    category,
    description,
    price,
    index
  }
}

export const removeProduct = index => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    index
  }
}

export const updateCartTotal = (index, price) => {
  return {
    type: CartActionTypes.UPDATE_CART_TOTAL,
    price,
    index
  }
}
