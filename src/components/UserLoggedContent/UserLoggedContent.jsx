import UserLoggedContext from 'contexts/UserLoggedContext'
import React, { useContext } from 'react'

export default function UserLoggedContent({ children }) {
  const userLoggedContext = useContext(UserLoggedContext)
  if (!userLoggedContext.user) return <></>
  return <>{children}</>
}
