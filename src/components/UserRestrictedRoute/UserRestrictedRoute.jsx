import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import UserLoggedContext from '../../contexts/UserLoggedContext'

export default function UserRestrictedRoute({ children }) {
  const userLoggedContext = useContext(UserLoggedContext)

  if (!userLoggedContext.user) {
    return <Redirect to="/login" />
  }

  return <>{children}</>
}
