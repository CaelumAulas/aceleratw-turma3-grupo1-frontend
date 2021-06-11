import { yellow } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ptBR } from '@material-ui/data-grid'

const config = createMuiTheme(
  {
    palette: {
      primary: {
        main: purple[900],
      },
      secondary: {
        main: yellow[300],
      },
    },
  },
  ptBR,
)

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={config}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
