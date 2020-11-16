import axios from 'axios'
import {bindActionCreators} from 'redux'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const setSingleProduct = id => ({
  type: SET_SINGLE_PRODUCT,
  id
})

const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
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

export const fetchUpdateProduct = (
  productId,
  name,
  description,
  quantity,
  price,
  imageUrl,
  category
) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/products/${productId}`, {
        name,
        description,
        quantity,
        price,
        imageUrl,
        category
      })
      dispatch(updateProduct(data))
    } catch (error) {
      console.log('error fetching THUNK')
    }
  }
}

const initialState = {}

export default function singleProduct(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.id
    case UPDATE_PRODUCT:
      return {...state, ...action.product}
    default:
      return state
  }
}
