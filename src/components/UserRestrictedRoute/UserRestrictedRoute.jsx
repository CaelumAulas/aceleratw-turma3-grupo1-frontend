import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import UserLogged from '../../contexts/UserLogged'

export default function UserRestrictedRoute({ children }) {
  const userLoggedContext = useContext(UserLogged)
  if (!userLoggedContext.user) return <Redirect to="/login" />
  return <>{children}</>
}
