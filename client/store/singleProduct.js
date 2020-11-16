import axios from 'axios'
import history from '../history'

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

const ADD_PRODUCT = 'ADD_PRODUCT'

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const addProductThunk = formData => async dispatch => {
  const {data: newProduct} = await axios.post('/api/products', formData.product)
  dispatch(addProduct(newProduct))
}

const DELETE_PRODUCT = 'DELETE_PRODUCT'
const deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}
export const deleteProductThunk = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.delete(`/api/products/${id}`)
      dispatch(deleteProduct(product))
    } catch (error) {
      console.log('Error deleting product')
      console.error(error)
    }
  }
}

const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const updateProductThunk = (id, product) => {
  return async dispatch => {
    try {
      console.log('PRODUCT', product)
      console.log('ID', id)
      const {data: updatedProduct} = await axios.put(
        `/api/products/${id}`,
        product
      )
      dispatch(updateProduct(updatedProduct))
      history.push('/createProduct')
    } catch (error) {
      console.log('Error updating campus from api')
      console.error(error)
    }
  }
}

const initialState = {}

export default function singleProduct(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.id
    case ADD_PRODUCT:
      return action.product
    case DELETE_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return {...state, ...action.product}
    default:
      return state
  }
}
