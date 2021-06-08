import { yellow } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import UserLogged from './contexts/UserLogged'
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
  function update(user) {
    const newContext = { ...userLoggedContext, user }
    setUserLoggedContext(newContext)
    setUser(user)
  }
  const [user, setUser] = useLocalStorage('user')
  const [userLoggedContext, setUserLoggedContext] = useState({
    user,
    update,
  })
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UserLogged.Provider value={userLoggedContext}>
          <AppRouter />
        </UserLogged.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
