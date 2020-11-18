import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchAddToCart, createNewOrder} from '../store/order'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id)
    this.props.loadOrderInfo()
  }

  handleSelectChange(evt) {
    this.setState({quantity: parseInt(evt.target.value)})
  }

  render() {
    const {quantity} = this.state
    const product = this.props.singleProduct
    const orderId = this.props.order

    return (
      <div className="jumbotron text-center">
        <div className="single-product-container">
          <h1 className="card-title h2 text-success">{product.name}</h1>
          <img src={product.imageUrl} className="img-products" />

          <h5>{product.category}</h5>
          <h5>Price: ${product.price}</h5>
          <br />
          <p>Details: {product.description}</p>
          <div>
            Quantity:
            <select
              onChange={this.handleSelectChange}
              value={parseInt(quantity)}
              name="quantity"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => {
              this.props.addToCart({
                productId: product.id,
                orderId: orderId[0].id,
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
    order: state.shoppingCart.order.data
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: product => dispatch(fetchAddToCart(product)),
    loadOrderInfo: () => dispatch(createNewOrder())
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
