import UserLoggedContext from 'contexts/UserLoggedContext'
import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom'

export default function PrivateRoute({ children, ...rest }) {
  const userLoggedContext = useContext(UserLoggedContext)

  if (!userLoggedContext.user) return <Redirect to="/login" />
  return <Route {...rest}>{children}</Route>
}
