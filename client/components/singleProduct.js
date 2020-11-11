import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const product = this.props.singleProduct
    return (
      <div>
        <div className="single-product-container">
          <h1>{product.name}</h1>
          <img src={product.imageUrl} />
          <h5>{product.category}</h5>
          <h5>Price: ${product.price}</h5>
          <p>Details: {product.description}</p>

          <button>Add to cart</button>
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
    loadSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
