import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { useParams, useRouteMatch } from 'react-router-dom'
import UserLogged from '../../contexts/UserLogged'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function UserRestrictedRoute({ children }) {
  const userLoggedContext = useContext(UserLogged)
  const { path } = useRouteMatch()
  const [pathUnauthorized, setpathUnauthorized, deletePathUnauthorized] =
    useLocalStorage('pathUnauthorized', path)

  if (!userLoggedContext.user) {
    setpathUnauthorized(pathUnauthorized)
    return <Redirect to="/login" />
  }

  deletePathUnauthorized()
  return <>{children}</>
}
