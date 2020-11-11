import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

const setSingleProduct = id => ({
  type: SET_SINGLE_PRODUCT,
  id
})

export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function singleProduct(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.id
    default:
      return state
  }
}
