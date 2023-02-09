import { createContext } from 'react'

const UserContext = createContext({
  user: {
    name: 'Buddy',
    email: 'asd@asd.cc',
  },
})

UserContext.displayName = 'UserContext'

export default UserContext
