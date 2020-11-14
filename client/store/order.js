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
const addToCart = product => ({
  type: ADD_TO_CART,
  product
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

export const fetchAddToCart = formData => {
  return async dispatch => {
    try {
      const {data} = await axios.post(
        '/api/orders/orderDetails',
        formData.product
      )
      dispatch(addToCart(data))
      // console.log('data --->', data)
    } catch (error) {
      console.log(error, 'error in THIS thunk')
    }
  }
}

// export const addCampusThunk = (formData) => async (dispatch) => {  const { data: newCampus } = await axios.post(    "/api/campuses",    formData.campus  );  dispatch(addCampus(newCampus));};

export const postNewOrder = userId => {
  console.log('userID in thunk-->', userId)
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/orders/newOrder`, {userId: userId})
      console.log('DATA IN THUNK->', data)
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
      return {...state, shoppingCart: action.items}
    case ADD_TO_CART:
      return {...state, shoppingCart: action.product}
    case CREATE_ORDER:
      return {...state, order: action.userId}
    default:
      return state
  }
}
