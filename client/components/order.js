import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  deleteItemFromCart,
  fetchCart,
  submitOrderPut,
  createNewOrder
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
    // console.log('props inside component did mount', this.props)
    await this.props.loadTotalCart(this.props.userId.id)
  }

  render() {
    console.log('props in shopping cart component--->', this.props.shoppingCart)
    const cart = this.props.shoppingCart
    const userId = this.props.userId.id
    const quantity = this.props
    const order = this.props.order
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
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          {cart.length ? (
            <tbody>
              {cart.map(el => (
                <tr key={el.id}>
                  <td>[name]</td>
                  {/* <td>{el.product.name}</td> */}
                  <td>
                    {/* <select
                      onChange={this.handleSelectChange}
                      value={quantity}
                      name="quantity"
                    > */}
                    {el.quantity}
                    {/* </select> */}
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
            onClick={() =>
              submitOrderPut(this.props.user.order.id, {isFulfilled: true})
            }
            className="btn btn-success"
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
    }
  }
}

export default connect(mapState, mapDispatch)(Order)
