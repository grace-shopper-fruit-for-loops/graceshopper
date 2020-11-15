import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts, deleteProductThunk} from '../store/products'
import CreateProduct from '../components/create-product'

class AllProductstoRemove extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      showCreateProduct: false
    }
    this.removeProduct = this.removeProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.toggleCreateProduct = this.toggleCreateProduct.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  removeProduct(id) {
    this.props.deleteProductThunk(id)
    this.props.fetchProducts()
  }

  addProduct() {
    this.props.fetchProducts()
  }
  toggleCreateProduct() {
    const showProductForm = !this.state.showCreateProduct
    this.setState({
      ...this.state,
      showCreateProduct: showProductForm
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>All products</h1>
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

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>imageUrl</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
        <div />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProductThunk: id => dispatch(deleteProductThunk(id))
  }
}

export default connect(mapState, mapDispatchToProps)(AllProductstoRemove)
