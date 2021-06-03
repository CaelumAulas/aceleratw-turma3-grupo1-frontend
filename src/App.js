import { yellow } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppRouter from './components/AppRouter/AppRouter'

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
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
