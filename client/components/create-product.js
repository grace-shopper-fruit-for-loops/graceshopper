import React, {Component} from 'react'
import FormProduct from '../components/form-product'
import {connect} from 'react-redux'
import {addProductThunk} from '../store/products'
import AllProductstoRemove from '../components/products-remove'

class CreateProduct extends Component {
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  /*
    CR NOTE: 
    - You don't have to await this.props.addProductThunk because the addProductThunk is already an async function. 
    - If you want to pre-populate this form for editing purposes you should have the local state reflect the product on the state. 
  */
  async handleSubmit(evt) {
    evt.preventDefault()
    const product = this.state
    await this.props.addProductThunk({product})
    this.props.addProduct()
    this.props.toggleCreateProduct()
  }

  render() {
    return (
      <div>
        <FormProduct
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <AllProductstoRemove />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addProductThunk: product => dispatch(addProductThunk(product))
})

export default connect(null, mapDispatchToProps)(CreateProduct)
