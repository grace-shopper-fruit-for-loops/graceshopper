import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchAddToCart, createNewOrder, postNewOrder} from '../store/order'
import {fetchProducts} from '../store/products'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: '1'
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id)
    this.props.loadOrderInfo()
  }

  handleSelectChange(evt) {
    this.setState({quantity: evt.target.value})
  }

  render() {
    console.log('this.props', this.props)
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
              // className="browser-default custom-select custom-select-lg mb-3"
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
    ORDER: state.shoppingCart.order.data
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: product => dispatch(fetchAddToCart(product)),
    loadOrderInfo: () => {
      dispatch(createNewOrder())
    }
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
