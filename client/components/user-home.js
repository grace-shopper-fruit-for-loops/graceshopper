import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {firstName} = props
  const {lastName} = props

  return (
    <div className="jumbotron text-center hoverable p-4">
      <div className="row">
        <div className="col-md-4 offset-md-1 mx-3 my-3">
          <div className="view overlay">
            <img
              src="https://images.unsplash.com/photo-1514995669114-6081e934b693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className="img-fluid"
              alt="Sample image for first version of blog listing"
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
        </div>
        <div className="col-md-7 text-md-left ml-3 mt-3">
          <a href="#!" className="green-text">
            <h4 className="h6 pb-1">
              <i className="fas fa-desktop pr-1" /> Welcome {email}
            </h4>
          </a>
          <h2 className="h4 mb-4">
            Welcome back!!! We are so happy to see you again!!!
          </h2>
          <p className="font-weight-normal">
            Thanks for bein a loyal customer of Fruitify Juicery !!! We hope you
            have an amazing day and find the most delicious juices here
          </p>
          <p className="font-weight-normal">
            by{' '}
            <a>
              <strong>
                {firstName} {lastName}
              </strong>
            </a>
            , 19/08/2016
          </p>
          <a className="btn btn-success">Read more</a>
        </div>
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    id: state.user.id
  }
}
export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
