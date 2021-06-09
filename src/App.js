import { yellow } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import NotificationContext from './contexts/NotificationContext'
import UserLoggedContext from './contexts/UserLoggedContext'
import useLocalStorage from './hooks/useLocalStorage'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: yellow[300],
    },
  },
})

function App() {
  function updateUser(user) {
    const newContext = { ...userLoggedContext, user }
    setUserLoggedContext(newContext)
    setUser(user)
  }
  function updateNotification() {
  }
  const [user, setUser] = useLocalStorage('user')
  const [userLoggedContext, setUserLoggedContext] = useState({
    user,
    update: updateUser,
  })
  const [notificationContext, setNotificationContext] = useState({
    notification,
    update: updateNotification,
  })

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NotificationContext.Provider value={notificationContext}>
          <UserLoggedContext.Provider value={userLoggedContext}>
            <AppRouter />
            <Notification />
          </UserLoggedContext.Provider>
        </NotificationContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
