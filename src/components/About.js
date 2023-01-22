import { Outlet } from 'react-router-dom'
import Profile from './ProfileClassComponent'
import ProfileFunctionalComponent from './Profile'
import React from 'react'

// const About2 = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <p>This is namaste react live course</p>
//       <ProfileFunctionalComponent name={'Artem'} />
//       <Profile name={'Artem'} />
//     </div>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props)

    // console.log('parent-constructor')
  }
  componentDidMount() {
    // api call
    // console.log('parent-comp did mount')
  }
  render() {
    // console.log('parent-render')
    return (
      <div>
        <h1>About us page</h1>
        <p>This is namaste react live course</p>
        {/* <ProfileFunctionalComponent name={'Artem'} /> */}
        <Profile name={'First Child'} />
      </div>
    )
  }
}

export default About
