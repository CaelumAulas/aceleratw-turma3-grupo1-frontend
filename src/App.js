import { yellow } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ptBR } from '@material-ui/data-grid'
import { useContext, useState } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import Notification from './components/Notification/Notification'
import NotificationContext from './contexts/NotificationContext'
import UserLoggedContext from './contexts/UserLoggedContext'
import useLocalStorage from './hooks/useLocalStorage'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: purple[900],
      },
      secondary: {
        main: yellow[300],
      },
    },
  },
  ptBR,
)

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
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
}

export default App
