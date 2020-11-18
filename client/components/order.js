import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  deleteItemFromCart,
  fetchCart,
  submitOrderPut,
  createNewOrder,
  incrementQuantity,
  decreaseQuantity
} from '../store/order'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await this.props.loadTotalCart(this.props.userId.id)
  }

  render() {
    const cart = this.props.shoppingCart
    const cartPrice = cart.map(el => el.price * el.quantity)
    const containsUndefinedProducts = cart.filter(
      el => el.product === undefined
    )
    const hasItemsInCart =
      cart.length >= 1 && containsUndefinedProducts.length === 0

    return (
      <div>
        <h3 className="card-title h3 text-success">
          This is your shopping cart:
        </h3>
        <br />
        {hasItemsInCart ? (
          <div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th> </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {cart.map(el => (
                  <tr key={el.id}>
                    <td>{el.product.name}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.props.decreaseQuantity(el)}
                      >
                        -
                      </button>
                      <span> {el.quantity}</span>
                      <button
                        className="btn btn-success"
                        onClick={() => this.props.incrementQuantity(el)}
                      >
                        +
                      </button>
                    </td>
                    <td>${el.price}</td>

                    <td>${el.quantity * el.price}</td>

                    <td>
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={() => this.props.deleteItem(el.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Subtotal:</td>
                  <td> </td>
                  <td> </td>
                  <td>${cartPrice.reduce((sum, amount) => sum + amount)}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/orders/confirmed">
              <button
                type="submit"
                onClick={() => this.props.submitOrderPut()}
                className="btn btn-success"
              >
                Checkout
              </button>
            </Link>
          </div>
        ) : (
          <h3>You do not have any items in your shopping cart</h3>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    shoppingCart: state.shoppingCart.shoppingCart,
    order: state.shoppingCart.order.data,
    userId: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadTotalCart: userId => dispatch(fetchCart(userId)),
    deleteItem: id => dispatch(deleteItemFromCart(id)),
    submitOrderPut: order => dispatch(submitOrderPut(order)),
    loadOrderInfo: () => dispatch(createNewOrder()),
    incrementQuantity: orderDetails =>
      dispatch(incrementQuantity(orderDetails)),
    decreaseQuantity: orderDetails => dispatch(decreaseQuantity(orderDetails))
  }
}

export default connect(mapState, mapDispatch)(Order)
