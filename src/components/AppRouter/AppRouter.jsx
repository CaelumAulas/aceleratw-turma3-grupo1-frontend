import { Box } from '@material-ui/core'
import Header from 'components/Header/Header'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import CreateUserPage from 'pages/CreateUserPage'
import CreateVehiclePage from 'pages/CreateVehiclePage'
import DashboardPage from 'pages/DashboardPage'
import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import UpdateVehiclePage from 'pages/UpdateVehiclePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Box pt='8rem' pb='2rem'>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/fabricante/:fabricante?' exact>
            <HomePage />
          </Route>
          <Route path='/entrar'>
            <LoginPage />
          </Route>
          <Route path='/novo-usuario'>
            <CreateUserPage />
          </Route>
          <PrivateRoute path='/dashboard'>
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute path='/novo-veiculo'>
            <CreateVehiclePage />
          </PrivateRoute>
          <PrivateRoute path='/veiculo/editar/:id'>
            <UpdateVehiclePage />
          </PrivateRoute>
        </Switch>
      </Box>
    </Router>
  )
}
