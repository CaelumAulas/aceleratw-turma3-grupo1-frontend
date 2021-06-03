import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateUserPage from '../../pages/CreateUserPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import Header from '../Header/Header'

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Box pt="10rem" pb="2rem">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/novo-usuario">
            <CreateUserPage />
          </Route>
        </Switch>
      </Box>
    </Router>
  )
}
