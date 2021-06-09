import React, { useContext } from 'react'
import UserLoggedContext from '../../contexts/UserLoggedContext'

export default function UserLoggedContent({ children }) {
  const userLoggedContext = useContext(UserLoggedContext)
  if (!userLoggedContext.user) return <></>
  return <>{children}</>
}
