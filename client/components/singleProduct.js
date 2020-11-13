import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchAddToCart} from '../store/order'
import Order from './order'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.log(error)
    }
  }

  handleClick = id => {
    console.log(id)
    this.props.addToCart(id)
  }

  render() {
    const product = this.props.singleProduct
    return (
      <div>
        <div className="single-product-container">
          <h1>{product.name}</h1>
          <img className="single-product-img" src={product.imageUrl} />
          <h5>{product.category}</h5>
          <h5>Price: ${product.price}</h5>
          <p>Details: {product.description}</p>
          <div>
            Quantity: <input />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.handleClick(product.id)
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
    singleProduct: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: id => dispatch(fetchAddToCart(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
