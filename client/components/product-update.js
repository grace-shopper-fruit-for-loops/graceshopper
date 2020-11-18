import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormProduct from './form-product'
import {updateProductThunk} from '../store/singleProduct'
import {fetchSingleProduct} from '../store/singleProduct'

class UpdateProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      quantity: '',
      price: '',
      imageUrl: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    const productToUpdate = this.props.fetchSingleProduct(
      this.props.match.params.productId
    )
    this.setState({
      name: productToUpdate.description,
      description: productToUpdate.description,
      quantity: productToUpdate.quantity,
      imageUrl: productToUpdate.imageUrl,
      category: productToUpdate.category
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    await this.props.updateProductThunk(
      this.props.match.params.productId,
      this.state
    )
  }
  render() {
    return (
      <div>
        <h1>Edit Product</h1>
        <FormProduct
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateProductThunk: (id, product) =>
    dispatch(updateProductThunk(id, product)),
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(null, mapDispatchToProps)(UpdateProduct)
