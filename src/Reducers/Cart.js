import * as CartActionTypes from '../ActionTypes/Cart';

const initialState = {
  cartProducts: [

  ]
}

export default function Cart(state=initialState, action){

  switch(action.type){
    case CartActionTypes.ADD_PRODUCT: {
      const addProductList = [...state.cartProducts, {
        product: action.product,
        title: action.title,
        price: action.price,
        category: action.category,
        description: action.description
      }]
      return {
        ...state,
        cartProducts: addProductList
      }
    }

    case CartActionTypes.REMOVE_PRODUCT: {
      const removeProductList = [
        ...state.cartProducts.slice(0, action.index),
        ...state.cartProducts.slice(action.index + 1)
      ]
      return {
        ...state,
        cartProducts: removeProductList
      }
    }
    default:
      return state;
  }
}
