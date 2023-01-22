import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // create state
    this.state = {
      userInfo: {
        name: 'Dummy name',
        location: 'Dummy location',
      },
    }
    console.log('child - constructor ' + this.props.name)
  }

  componentDidMount() {
    // API CALL

    console.log('child - componentDidMount ' + this.props.name)
  }

  componentDidUpdate() {
    console.log('child - componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('child - componentWillUnmount')
  }

  render() {
    const { count } = this.state
    console.log('child - render ' + this.props.name)
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Name: {this.state.userInfo.location}</h2>
      </div>
    )
  }
}

export default Profile
