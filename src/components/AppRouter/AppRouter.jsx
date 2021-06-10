import { Box } from '@material-ui/core'
import Header from 'components/Header/Header'
import UserRestrictedRoute from 'components/UserRestrictedRoute/UserRestrictedRoute'
import CreateUserPage from 'pages/CreateUserPage'
import CreateVehiclePage from 'pages/CreateVehiclePage'
import DashboardPage from 'pages/DashboardPage'
import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
