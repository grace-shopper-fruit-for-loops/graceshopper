import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(getProducts(products))
    } catch (error) {
      console.error('Error fetching products from api')
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

/* 
CR NOTE: 
- Please make sure to wrap your AJAX/Axios requests within try/catch blocks b/c they can most certainly throw errors

*/

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
      console.log('Error deleting student')
      console.error(error)
    }
  }
}

const initialState = []

//CR NOTE:
//Your initial state for this reducer is an empty array
//But we are working with both a "product" and "products"
//I agree that your initial state can just be an array that would represent the products that we have in stock.
//ADD_PRODUCT should return a new state when we add a new product (an array with the new product that was added) not just a product object.
//Same goes for DELETE_PRODUCT - should return an array with the new list of products after an item was removed.
export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return action.product
    case DELETE_PRODUCT:
      return action.product
    default:
      return state
  }
}
