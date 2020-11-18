import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER'

const createOrder = userId => ({
  type: CREATE_ORDER,
  userId
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

const initalState = {}

export default function orderInfo(state = initalState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {...state, order: action.userId}
    default:
      return state
  }
}
