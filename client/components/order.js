import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteItem, fetchOrder, fetchCart} from '../store/order'
import {me} from '../store/user'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('props inside component did mount', this.props)
    // this.props.getOrder()
    this.props.loadTotalCart(this.props.userId.id)
  }

  render() {
    console.log('props in shopping cart component--->', this.props)
    const cart = this.props.shoppingCart
    const userId = this.props.userId.id
    console.log(this.props.userId.id, 'USER ID OBJ')
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
                  <td>{el.quantity}</td>
                  <td>${el.price}</td>

                  <td>${el.quantity * el.price}</td>
                  <td>
                    <button className="btn btn-success" type="submit">
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-success"
                      type="submit"
                      // onClick={deleteItem({
                      //   productId: el.productId,
                      //   orderId: el.orderId,
                      // })}
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
            className="btn btn-success"
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
    order: state.user.order,
    userId: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadTotalCart: userId => dispatch(fetchCart(userId)),
    deleteItem: productId => dispatch(deleteItem(productId))
  }
}

export default connect(mapState, mapDispatch)(Order)
