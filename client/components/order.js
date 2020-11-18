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
import {me} from '../store/user'

class Order extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   quantity: this.props.shoppingCart.shoppingCart.quantity,
    // }
  }
  async componentDidMount() {
    await this.props.loadTotalCart(this.props.userId.id)
  }

  render() {
    let sum = 0
    const cart = this.props.shoppingCart

    const userId = this.props.userId.id
    console.log('props in shopping cart component--->', this.props)
    const quantity = this.props
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
                    {/* <td>[name]</td> */}
                    <td>{el.product.name}</td>
                    <td>
                      {/* <select
                      onChange={this.handleSelectChange}
                      value={quantity}
                      name="quantity"
                    > */}
                      <button
                        className="btn btn-success"
                        onClick={() => this.props.decreaseQuantity(el)}
                      >
                        -
                      </button>
                      {el.quantity}
                      {/* </select> */}
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
          // <div>
          <h3>You do not have any items in your shopping cart</h3>
          // </div>
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
    loadOrderInfo: () => {
      dispatch(createNewOrder())
    },
    incrementQuantity: orderDetails =>
      dispatch(incrementQuantity(orderDetails)),
    decreaseQuantity: orderDetails => dispatch(decreaseQuantity(orderDetails))
  }
}

export default connect(mapState, mapDispatch)(Order)
