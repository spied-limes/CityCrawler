import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

// const UserHome = props => {
//   const {email} = props

//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//     </div>
//   )
// }

class UserHome extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.84013,
      longitude: -73.938001,
      zoom: 16
    }
  }

  render() {
    console.log(this)
    return (
      <div>
        Welcome, {this.props.email}
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1Ijoic2xlZXB5a2lkMzYiLCJhIjoiY2pvZ2F0bjlhMGQ0cTNwbjBnZzI5em01aCJ9.DNsguoMme8AGCqtmKWiJ0w"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({viewport})}
        />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
