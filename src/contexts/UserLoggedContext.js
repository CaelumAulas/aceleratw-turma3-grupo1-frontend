import { createContext } from 'react'

const UserLoggedContext = createContext({
  user: null,
  update: () => {},
})

export default UserLoggedContext
