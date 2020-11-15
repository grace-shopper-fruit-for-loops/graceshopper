import axios from 'axios'

const GET_SHOPPING_CART = 'GET_SHOPPING_CART'

const ADD_TO_CART = 'ADD_TO_CART'

const CREATE_ORDER = 'CREATE_ORDER'

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

export const fetchCart = orderId => {
  console.log('orderId!!!!', orderId)
  return async dispatch => {
    try {
      console.log('before axios')
      const {data} = await axios.get('/api/orders', {orderId: orderId})
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

const initalState = {
  shoppingCart: [],
  order: {}
}

// shoppingCart: {orders:{}, products: []}

export default function shoppingCart(state = initalState, action) {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return {...state, shoppingCart: [...state.shoppingCart, action.items]}
    case ADD_TO_CART:
      return {...state, shoppingCart: [action.productObj]}
    case CREATE_ORDER:
      return {...state, order: action.userId}
    default:
      return state
  }
}
