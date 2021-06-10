import UserLoggedContext from 'contexts/UserLoggedContext'
import React, { useContext } from 'react'
import { Redirect } from 'react-router'

export default function UserRestrictedRoute({ children }) {
  const userLoggedContext = useContext(UserLoggedContext)

  if (!userLoggedContext.user) {
    return <Redirect to="/login" />
  }

  return <>{children}</>
}
