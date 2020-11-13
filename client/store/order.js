import axios from 'axios'

const GET_SHOPPING_CART = 'GET_SHOPPING_CART'

const ADD_TO_CART = 'ADD_TO_CART'

const CREATE_ORDER = 'CREATE_ORDER'

const getShoppingCart = items => ({
  type: GET_SHOPPING_CART,
  items
})

const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const createOrder = userId => ({
  type: CREATE_ORDER,
  userId
})

export const fetchCart = () => {
  console.log('thunk!!!!')
  return async dispatch => {
    try {
      console.log('before axios')
      const {data} = await axios.get('/api/orders')
      console.log('THUNK DATA->', data)
      dispatch(getShoppingCart(data))
    } catch (error) {
      console.log(error, 'error in the thunk')
    }
  }
}

export const fetchAddToCart = id => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orders/${id}`)
      console.log('data --->', data)
      dispatch(addToCart(data))
    } catch (error) {
      console.log(error, 'error in thunk')
    }
  }
}

export const postNewOrder = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders/newOrder', userId)
      dispatch(createOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initalState = []

export default function shoppingCart(state = initalState, action) {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return action.items
    case ADD_TO_CART:
      return [...state, action.id]
    case CREATE_ORDER:
      return action.orderId
    default:
      return state
  }
}
