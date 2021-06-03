import { Box } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { Link as NavLink } from 'react-router-dom'

export default function Header() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link component={NavLink} to="/" color="inherit">
              Carango Bom
            </Link>
          </Typography>
          <Box pr={2}>
            <p>Boas vindas, fulano</p>
          </Box>
          <Box p={1}>
            <Link component={NavLink} to="/login" color="inherit">
              Entrar
            </Link>
          </Box>
          <Box p={1}>
            <Link component={NavLink} to="/dashboard" color="inherit">
              Dashboard
            </Link>
          </Box>
          <Box p={1}>
            <Link component={NavLink} to="/" color="inherit">
              Veículos
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
