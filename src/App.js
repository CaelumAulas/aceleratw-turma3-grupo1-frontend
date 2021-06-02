import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CreateUserPage from './pages/CreateUserPage'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import { Box } from '@material-ui/core'

function App() {
  return (
    <>
      <Header />
      <Box pt="10rem" pb="2rem">
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/novo-usuario">
              <CreateUserPage />
            </Route>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Box>
    </>
  )
}

export default App
