import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Header from './components/Header/Header'
import { Box } from '@material-ui/core'

function App() {
  return (
    <>
      <Header />
      <Box pt="8rem">
        <Router>
          <Switch>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </Box>
    </>
  )
}

export default App
