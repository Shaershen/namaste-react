import { useEffect, useState } from 'react'

const Profile = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // API CALL
  })

  return (
    <div>
      <h1>This is Profile Functional</h1>
      <h3>{props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  )
}

export default Profile
