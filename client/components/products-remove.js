import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {deleteProductThunk, updateProductThunk} from '../store/singleProduct'
import CreateProduct from '../components/create-product'

import {Link} from 'react-router-dom'

class AllProductstoRemove extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      showCreateProduct: false
    }
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.toggleCreateProduct = this.toggleCreateProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.getProduct = this.getProduct.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  addProduct() {
    this.props.fetchProducts()
  }

  removeProduct(id) {
    this.props.deleteProductThunk(id)
    this.props.fetchProducts()
  }

  toggleCreateProduct() {
    const showProductForm = !this.state.showCreateProduct
    this.setState({
      ...this.state,
      showCreateProduct: showProductForm
    })
  }
  updateProduct(id) {
    this.props.updateProductThunk(id)
    this.props.fetchProducts()
  }

  getProduct() {
    // this.props.fetchSingleProduct(this.props.match.params.orderId)
    this.setState({
      ...this.state,
      showUpdateProduct: false
    })
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <div>
          <h1>All products</h1>
          <br />
          <button
            className="btn btn-primary"
            onClick={this.toggleCreateProduct}
          >
            Add Product
          </button>
          {this.state.showCreateProduct && (
            <CreateProduct
              addProduct={this.addProduct}
              toggleCreateProduct={this.toggleCreateProduct}
            />
          )}
        </div>
        <br />
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>imageUrl</th>
              <th>Category</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.imageUrl}</td>
                <td>${product.category}</td>
                <td>
                  {this.removeProduct && (
                    <button
                      className="btn btn-danger"
                      onClick={() => this.removeProduct(product.id)}
                    >
                      Remove
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/updateProduct/${product.id}`}>
                    <button className="btn btn-warning">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProductThunk: id => dispatch(deleteProductThunk(id)),
    updateProductThunk: (id, product) =>
      dispatch(updateProductThunk(id, product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductstoRemove)
