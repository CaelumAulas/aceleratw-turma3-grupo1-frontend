import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateUserPage from '../../pages/CreateUserPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'
import Header from '../Header/Header'
import CreateVehiclePage from '../../pages/CreateVehiclePage'
import UserRestrictedRoute from '../UserRestrictedRoute/UserRestrictedRoute'

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
          <Route path="/dashboard">
            <UserRestrictedRoute>
              <DashboardPage />
            </UserRestrictedRoute>
          </Route>
          <Route path="/novo-veiculo">
            <UserRestrictedRoute>
              <CreateVehiclePage />
            </UserRestrictedRoute>
          </Route>
        </Switch>
      </Box>
    </Router>
  )
}
