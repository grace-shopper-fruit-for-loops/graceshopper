import React from 'react'
import singleProduct from './singleProduct'

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quantity: 0,
      price: 0,
      subtotal: 0
    }
  }

  render() {
    console.log(this.props, 'props')
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
            <tr>
              <td>fake name</td>
              <td>fake qty</td>
              <td>fake price</td>
              <td>fake total price</td>
            </tr>
            <tr>
              <td colSpan="3.5" align="right">
                Subtotal
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
