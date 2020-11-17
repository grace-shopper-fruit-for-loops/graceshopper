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
    this.state = {
      quantity: '1'
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.log(error)
    }
  }

  handleSelectChange(evt) {
    this.setState({quantity: evt.target.value})
  }

  render() {
    const {quantity} = this.state
    const product = this.props.singleProduct
    const users = this.props.user
    const orderId = ((users || {}).order || {}).id

    return (
      <div>
        <div className="single-product-container">
          <h1>{product.name}</h1>
          <img src={product.imageUrl} className="img-products" />

          <h5>{product.category}</h5>
          <h5>Price: ${product.price}</h5>
          <p>Details: {product.description}</p>
          <div>
            Quantity:
            <select
              onChange={this.handleSelectChange}
              value={quantity}
              name="quantity"
              className="browser-default custom-select custom-select-lg mb-3"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => {
              this.props.addToCart({
                productId: product.id,
                orderId: orderId,
                quantity: this.state.quantity,
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
    order: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: product => dispatch(fetchAddToCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
