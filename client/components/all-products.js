import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    try {
      this.props.fetchAllProducts()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div id="all-products">
        <h2> These are all our healthy and yummy products! </h2>
        <div>


          <button type="submit">Create New Order</button>
         <div className="products-list-container">
      
            {this.props.products.map(product => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <h3>{product.name}</h3>
                  <img
                    src={product.imageUrl}
                    height="300"
                    className="all-images"
                  />
                </Link>

                <h5>Price: ${product.price}</h5>
            

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
