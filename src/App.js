import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
