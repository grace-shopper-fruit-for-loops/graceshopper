import React from 'react'

const FormProduct = props => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <div className="form-group ">
      <label htmlFor="name">Name:</label>
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
      <label htmlFor="description">Description:</label>
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
      <label htmlFor="quantity">Quantity:</label>
      <input
        className="form-control"
        name="quantity"
        type="number"
        value={props.quantity}
        onChange={props.handleChange}
        required
      />
    </div>
    <div className="form-group ">
      <label htmlFor="price">Price:</label>
      <input
        className="form-control"
        name="price"
        type="number"
        value={props.price}
        onChange={props.handleChange}
        required
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

    <div className="form-group">
      <label htmlFor="category">Category:</label>
      <select
        onChange={props.handleChange}
        name="category"
        value={props.category}
        className="browser-default custom-select custom-select-lg mb-3"
      >
        <option selected value="Juice">
          Juice
        </option>
        <option>Smoothie</option>
      </select>
    </div>
    <button className="btn btn-success" type="submit">
      Save Changes
    </button>
  </form>
)

export default FormProduct
