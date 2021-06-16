import NotificationContext from 'contexts/NotificationContext'
import UserLoggedContext from 'contexts/UserLoggedContext'
import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export default function LogoutPage() {
  const userContext = useContext(UserLoggedContext)
  const notificationContext = useContext(NotificationContext)
  useEffect(() => {
    userContext.update('')
    notificationContext.update({
      message: 'Você saiu do sistema.',
    })
  }, [])
  return <Redirect to='/' />
}
