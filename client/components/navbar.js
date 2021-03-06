import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {isAdmin && <Link to="/admin">ADMIN</Link>}

          <Link to="/">Home</Link>
          {isAdmin && <Link to="/createProduct">Create Products</Link>}
          <Link to="/products"> Products</Link>

          <Link to="/orders">
            {' '}
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
              className="img-nav"
            />
          </Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/">Home</Link>
          <Link to="/products"> Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
          <Link to="/orders">
            {' '}
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
              className="img-nav"
            />
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
