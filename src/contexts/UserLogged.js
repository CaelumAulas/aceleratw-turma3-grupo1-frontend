import { createContext } from 'react'

const UserLogged = createContext({
  user: null,
  name: null,
  update: () => {},
})

export default UserLogged
