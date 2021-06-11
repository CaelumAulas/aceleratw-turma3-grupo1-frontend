import Theme from 'components/Theme/Theme'
import { useContext, useState } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import Notification from './components/Notification/Notification'
import NotificationContext from './contexts/NotificationContext'
import UserLoggedContext from './contexts/UserLoggedContext'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [storedUser, setStoredUser] = useLocalStorage('user')
  const [user, setUser] = useState({
    user: storedUser,
    update: user => {
      setUser({ ...user, user })
      setStoredUser(user)
    },
  })

  const notificationContext = useContext(NotificationContext)
  const [notification, setNotification] = useState({
    ...notificationContext,

    update: ({ message, severity, open }) => {
      setNotification({
        ...notification,
        message,
        severity,
        open,
      })
    },
  })

  return (
    <Theme>
      <NotificationContext.Provider value={notification}>
        <UserLoggedContext.Provider value={user}>
          <Notification
            message={notification.message}
            severity={notification.severity}
            open={notification.open}
          />
          <AppRouter />
        </UserLoggedContext.Provider>
      </NotificationContext.Provider>
    </Theme>
  )
}

export default App
