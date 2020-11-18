import axios from 'axios'
import {initialize} from 'passport'

const CREATE_ORDER = 'CREATE_ORDER'

const GET_SHOPPING_CART = 'GET_SHOPPING_CART'

const ADD_TO_CART = 'ADD_TO_CART'

const DELETE_ITEM = 'DELETE_ITEM'

const SUBMIT_ORDER = 'SUBMIT_ORDER'

const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

const createOrder = userId => ({
  type: CREATE_ORDER,
  userId
})

const getShoppingCart = items => ({
  type: GET_SHOPPING_CART,
  items
})

const addToCart = productObj => ({
  type: ADD_TO_CART,
  productObj
})

const deleteItem = orderDetailsId => ({
  type: DELETE_ITEM,
  orderDetailsId
})

const submitOrder = () => ({
  type: SUBMIT_ORDER
})

const updateQuantity = order => ({
  type: UPDATE_QUANTITY,
  order
})

export const createNewOrder = () => {
  return async dispatch => {
    try {
      const newOrder = await axios.post('/api/orders/newOrder')
      dispatch(createOrder(newOrder))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      console.log('data from fetch cart thunk', data)

      dispatch(getShoppingCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchAddToCart = productObj => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders', productObj)
      dispatch(addToCart(data))
      alert('Item Added To Cart')
    } catch (error) {
      console.log(error, 'error in THIS thunk')
    }
  }
}

export const deleteItemFromCart = id => {
  return dispatch => {
    try {
      axios.delete(`/api/orders/${id}`)
      dispatch(deleteItem(id))
    } catch (error) {
      console.log(error)
    }
  }
}

export const submitOrderPut = () => {
  return async dispatch => {
    try {
      await axios.put('/api/orders')
      dispatch(submitOrder())
    } catch (error) {
      console.log(error)
    }
  }
}

export const incrementQuantity = orderDetails => {
  return async dispatch => {
    try {
      await axios.put('/api/orders/incrementQuantity', orderDetails)
      orderDetails.quantity = orderDetails.quantity + 1
      dispatch(updateQuantity(orderDetails))
    } catch (error) {
      console.log(error)
    }
  }
}

export const decreaseQuantity = orderDetails => {
  return async dispatch => {
    try {
      console.log('ORDER DETAILS IN DECREASE', orderDetails)
      await axios.put('/api/orders/decreaseQuantity', orderDetails)
      orderDetails.quantity = orderDetails.quantity - 1
      dispatch(updateQuantity(orderDetails))
    } catch (error) {
      console.log(error)
    }
  }
}

const initalState = {
  shoppingCart: [],
  order: {}
}

export default function shoppingCart(state = initalState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {...state, order: action.userId}
    case GET_SHOPPING_CART:
      return {...state, shoppingCart: action.items}
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.productObj]
      }
    case DELETE_ITEM:
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.filter(
            cart => cart.id !== action.orderDetailsId
          )
        ]
      }
    case SUBMIT_ORDER:
      return initalState
    case UPDATE_QUANTITY:
      console.log('Checking dispatch values', action)
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.map(
            cart => (cart.id === action.order.id ? action.order : cart)
          )
        ]
      }
    default:
      return state
  }
}
