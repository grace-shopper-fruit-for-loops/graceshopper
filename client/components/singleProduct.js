import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchAddToCart} from '../store/order'
import Order from './order'
import {fetchProducts} from '../store/products'
import {postNewOrder} from '../store/order'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.log(error)
    }
  }

  // handleClick = (product) => {
  //   console.log('order->', this.props)
  //   this.props.addToCart(product.id)
  // }

  render() {
    const product = this.props.singleProduct
    const orderId = this.props.order.id
    console.log('ORDERID in single product', this.props.order.id)
    return (
      <div>
        <div className="single-product-container">
          <h1>{product.name}</h1>
          <img src={product.imageUrl} className="img-products" />

          <h5>{product.category}</h5>
          <h5>Price: ${product.price}</h5>
          <p>Details: {product.description}</p>
          <div>
            Quantity: <input />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => {
              this.props.addToCart({
                productId: product.id,
                orderId: orderId,
                quantity: product.quantity,
                price: product.price
              })
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct,
    user: state.user,
    order: state.shoppingCart.order
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: product => dispatch(fetchAddToCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
