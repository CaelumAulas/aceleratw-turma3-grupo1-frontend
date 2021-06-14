import { purple, yellow } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ptBR } from '@material-ui/data-grid'

export default function Theme({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const config = createMuiTheme(
    {
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        shadow: [],
        primary: {
          main: prefersDarkMode ? '#fff' : purple[900],
        },
        secondary: {
          main: prefersDarkMode ? yellow[300] : yellow[300],
        },
      },
    },
    ptBR,
  )
  return (
    <ThemeProvider theme={config}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
