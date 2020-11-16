import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  //const {id} = props
  console.log('PROPS', props)

  return (
    <div>
      <h3>Welcome, {email}</h3>
      {/* <h3>Welcome, {id}</h3> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('STATE', state)
  return {
    email: state.user.email,
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
