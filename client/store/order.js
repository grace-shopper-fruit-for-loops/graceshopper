import axios from 'axios'
import order from '../components/order'

const GET_SHOPPING_CART = 'GET_SHOPPING_CART'

const ADD_TO_CART = 'ADD_TO_CART'

const CREATE_ORDER = 'CREATE_ORDER'

const DELETE_ITEM = 'DELETE_ITEM'

// load products in shopping cart component
const getShoppingCart = items => ({
  type: GET_SHOPPING_CART,
  items
})

// once user clicks add to cart -> post order to order details table
const addToCart = productObj => ({
  type: ADD_TO_CART,
  productObj
})

const createOrder = userId => ({
  type: CREATE_ORDER,
  userId
})

const deleteItem = id => ({
  type: DELETE_ITEM,
  id
})

////this thunk is not running correctly!
export const fetchCart = orderId => {
  console.log('dispatched from component did mount!!!!', orderId)
  return async dispatch => {
    try {
      console.log('before axios', orderId)
      const {data} = await axios.get(`/api/orders/${orderId}`)
      console.log('THUNK DATA->', data)
      dispatch(getShoppingCart(data))
    } catch (error) {
      console.log(error, 'error in the fetch cart thunk')
    }
  }
}

export const fetchAddToCart = productObj => {
  // console.log('product obj-->', productObj)
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders/orderDetails', productObj)
      dispatch(addToCart(data))
      alert('Item Added To Cart')
      // console.log('data --->', data)
    } catch (error) {
      console.log(error, 'error in THIS thunk')
    }
  }
}

export const postNewOrder = userId => {
  console.log('userID in thunk-->', userId)
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orders/newOrder`, {userId: userId})
      // console.log('DATA IN THUNK->', data)
      dispatch(createOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteItemFromCart = id => {
  return async dispatch => {
    try {
      await axios.delete('/api/orders/orderDetails', id)
      dispatch(deleteItem(id))
    } catch (error) {
      console.log(error)
    }
  }
}

const initalState = {
  shoppingCart: [],
  order: {}
}

// shoppingCart: {orders:{}, products: []}

export default function shoppingCart(state = initalState, action) {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return {...state, shoppingCart: action.items}
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.productObj]
      }
    case CREATE_ORDER:
      return {...state, order: action.userId}
    case DELETE_ITEM:
      return {...state.shoppingCart.filter(cart => cart.id !== action.id)}
    default:
      return state
  }
}
