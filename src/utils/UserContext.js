import { createContext } from 'react'

const UserContext = createContext({
  user: {
    name: 'test',
    email: 'asd@asd.cc',
  },
})

export default UserContext
