import axios from 'axios'

const GET_ORDER = 'GET_ORDER'

const GET_SHOPPING_CART = 'GET_SHOPPING_CART'

const ADD_TO_CART = 'ADD_TO_CART'

const DELETE_ITEM = 'DELETE_ITEM'

const SUBMIT_ORDER = 'SUBMIT_ORDER'

// retrieve order info for user
const getOrder = order => ({
  type: GET_ORDER,
  order
})

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

const deleteItem = orderDetailsId => ({
  type: DELETE_ITEM,
  orderDetailsId
})

const submitOrder = () => ({
  type: SUBMIT_ORDER
})

export const fetchCart = userId => {
  console.log('from component did mount!!!!', userId)
  return async dispatch => {
    try {
      console.log('before axios', userId)
      const {data} = await axios.get(`/api/orders/${userId}`)
      console.log('THUNK DATA->', data)
      dispatch(getShoppingCart(data))
    } catch (error) {
      console.log(error, 'error in the fetch cart thunk')
    }
  }
}

export const fetchAddToCart = productObj => {
  console.log('product obj-->', productObj)
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
  console.log('delete thunk with order details ID', id)
  return dispatch => {
    try {
      console.log('>>>also made it here')
      axios.delete(`/api/orders/${id}`)
      console.log('also made it here')
      dispatch(deleteItem(id))
    } catch (error) {
      console.log(error)
    }
  }
}

// export const incrementQtyThunk = (num) => {
//   return async (dispatch) => {
//     try {

//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const submitOrderPut = order => {
  return async dispatch => {
    try {
      await axios.put(`/api/orders/${order}`)
      dispatch(submitOrder())
    } catch (error) {
      console.log(error)
    }
  }
}

const initalState = {
  shoppingCart: []
}

export default function shoppingCart(state = initalState, action) {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return {...state, shoppingCart: action.items}
    case ADD_TO_CART:
      // let productId = state.shoppingCart.map(el => el.productId)
      // if (productId === action.productObj.productId) {

      // }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.productObj]
      }
    case DELETE_ITEM:
      // return {...state.shoppingCart.filter((cart) => cart.id !== action.id)}
      return {
        ...state,
        shoppingCart: [
          ...state.filter(cart => cart.id !== action.orderDetailsId)
        ]
      }
    // return action.orderDetailsId
    case SUBMIT_ORDER:
      return state
    default:
      return state
  }
}
