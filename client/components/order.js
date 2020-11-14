import React from 'react'
import {fetchCart, fetchAddToCart} from '../store/order'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    try {
      this.props.loadTotalCart()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const cart = this.props.shoppingCart
    return (
      <div>
        <h1>This is the shopping cart!!!</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(el => (
              <tr key={el.id}>
                <td>{el.productId}</td>
                <td>{el.quantity}</td>
                <td>${el.price}</td>

                <td>${el.quantity * el.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3.5" align="right">
                Subtotal
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/orders/confirmed">
          <button>Checkout</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

const mapDispatch = dispatch => {
  return {
    loadTotalCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Order)
