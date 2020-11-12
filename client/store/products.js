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

const initialState = []

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
