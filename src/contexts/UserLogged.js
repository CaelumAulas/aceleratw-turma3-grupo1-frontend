import { createContext } from 'react'

const UserLogged = createContext({
  user: null,
  update: () => {},
})

export default UserLogged
