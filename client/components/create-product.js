import React, {Component} from 'react'
import FormProduct from '../components/form-product'
import {connect} from 'react-redux'
import {addProductThunk} from '../store/singleProduct'

class CreateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      quantity: '',
      price: '',
      imageUrl: '',
      category: 'Juice'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

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
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addProductThunk: product => dispatch(addProductThunk(product))
})

export default connect(null, mapDispatchToProps)(CreateProduct)
