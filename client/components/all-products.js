import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {postNewOrder} from '../store/order'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <h2 className="card-title h2 text-success">
          These are all our healthy and yummy products!
        </h2>
        <div>
          <div className="products-list-container">
            {this.props.products.map(product => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <p className="card-title h4 text-success">{product.name}</p>
                  <img
                    src={product.imageUrl}
                    height="300"
                    className="all-images"
                  />
                </Link>
                <h5>Price: ${product.price}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    order: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
