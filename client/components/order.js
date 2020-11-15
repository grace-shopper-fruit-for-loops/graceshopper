import React from 'react'
import {fetchCart} from '../store/order'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import OrderConfirmation from './order-confirmation'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    try {
      console.log('props inside component did mount', this.props.order.id)
      this.props.loadTotalCart(this.props.match.params.orderId)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    // console.log('props in shopping cart component--->', this.props)
    const cart = this.props.shoppingCart
    console.log('props inside cart component->', this.props.shoppingCart)
    console.log(cart.length, '<--cart length')
    // console.log(cart., "<--cart length")
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
          {cart ? (
            <tbody>
              {cart.map(el => (
                <tr key={el.id}>
                  <td>{el.id}</td>
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
          ) : (
            // <div>
            <h3>You do not have any items in your shopping cart</h3>
            // </div>
          )}
        </table>

        <Link to="/orders/confirmed">
          <button
            type="submit"
            // onClick={<OrderConfirmation order={this.props.order.id} />}
          >
            Checkout
          </button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    shoppingCart: state.shoppingCart.shoppingCart,
    order: state.shoppingCart.order
  }
}

const mapDispatch = dispatch => {
  return {
    loadTotalCart: orderId => dispatch(fetchCart(orderId))
  }
}

export default connect(mapState, mapDispatch)(Order)
