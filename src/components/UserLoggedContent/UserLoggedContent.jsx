import React, { useContext } from 'react'
import UserLogged from '../../contexts/UserLogged'

export default function UserLoggedContent({ children }) {
  const userLoggedContext = useContext(UserLogged)
  if (!userLoggedContext.user) return <></>
  return <>{children}</>
}
