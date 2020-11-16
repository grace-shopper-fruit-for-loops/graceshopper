import React from 'react'
import {fetchCart} from '../store/order'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteItem} from '../store/order'

class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    try {
      console.log('props inside component did mount', this.props)
      this.props.loadTotalCart(this.props.order.id)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log('props in shopping cart component--->', this.props)
    const cart = this.props.shoppingCart
    // const filteredArr = cart.filter((el) => el.orderId === this.props.order.id)
    // console.log(this.props.shoppingCart[2].product, '-----')
    // console.log('filtered array--->', filteredArr[0].product)
    // console.log('props inside cart component->', this.props.shoppingCart)
    // console.log(cart.length, '<--cart length')
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
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          {cart ? (
            <tbody>
              {cart.map(el => (
                <tr key={el.id}>
                  <td />
                  {/*<td>[name]</td>*/}
                  {/*<td>{el.product.name}</td>*/}
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
    order: state.shoppingCart.order
    //***** CR NOTE:
    //can add the userId you want from the Redux state here! For example:
    //userId: state.user.id
    //then we can call fetchCart and pass userId to get the order!
    //You can do this with any other component you think would need the userId as well... perhaps when you add to cart too ;)
  }
}

const mapDispatch = dispatch => {
  return {
    loadTotalCart: orderId => dispatch(fetchCart(orderId)),
    deleteItem: productId => dispatch(deleteItem(productId))
  }
}

export default connect(mapState, mapDispatch)(Order)
