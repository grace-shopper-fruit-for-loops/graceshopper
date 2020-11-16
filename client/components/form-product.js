import React from 'react'

const FormProduct = props => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <div className="form-group ">
      <label htmlFor="productName">Name:</label>
      <input
        className="form-control"
        name="name"
        type="text"
        value={props.name}
        onChange={props.handleChange}
        required
      />
    </div>

    <div className="form-group ">
      <label htmlFor="productDescription">Description:</label>
      <input
        className="form-control"
        name="description"
        type="text"
        value={props.description}
        onChange={props.handleChange}
        required
      />
    </div>

    <div className="form-group ">
      <label htmlFor="productQuantity">Quantity:</label>
      <input
        className="form-control"
        name="quantity"
        type="text"
        value={props.quantity}
        onChange={props.handleChange}
      />
    </div>
    <div className="form-group ">
      <label htmlFor="productPrice">Price:</label>
      <input
        className="form-control"
        name="price"
        type="text"
        value={props.price}
        onChange={props.handleChange}
      />
    </div>

    <div className="form-group ">
      <label htmlFor="imageUrl">Product Image URL:</label>
      <input
        className="form-control"
        name="imageUrl"
        type="url"
        value={props.imageUrl}
        onChange={props.handleChange}
      />
    </div>

    <div className="form-group ">
      <label htmlFor="productCategory">Category:</label>
      <input
        className="form-control"
        name="category"
        type="text"
        value={props.category}
        onChange={props.handleChange}
      />
    </div>
    <button className="btn btn-success" type="submit">
      Save Changes
    </button>
  </form>
)

export default FormProduct
