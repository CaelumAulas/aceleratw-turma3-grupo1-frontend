import { purple, yellow } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ptBR } from '@material-ui/data-grid'
import PropTypes from 'prop-types'
import React from 'react'

export default function Theme({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const config = createMuiTheme(
    {
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
          main: prefersDarkMode ? '#c3c3c3' : purple[900],
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

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}
