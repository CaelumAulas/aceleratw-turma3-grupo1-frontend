import { AppBar, Box, Link as MaterialLink } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React, { useContext } from 'react'
import { Link as NavLink } from 'react-router-dom'
import UserLoggedContext from '../../contexts/UserLoggedContext'
import UserLoggedContent from '../UserLoggedContent/UserLoggedContent'

export default function Header() {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
  }))
  const userLoggedContext = useContext(UserLoggedContext)
  const classes = useStyles()
  return (
    <>
      <AppBar color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={NavLink} to="/" color="inherit">
              Carango Bom
            </Link>
          </Typography>
          <UserLoggedContent>
            <Box pr={1} className={classes.title}>
              <p>Boas vindas, {userLoggedContext.user}!</p>
            </Box>
          </UserLoggedContent>
          {!userLoggedContext.user && (
            <Box p={1}>
              <Link component={NavLink} to="/login" color="inherit">
                Entrar
              </Link>
            </Box>
          )}
          <UserLoggedContent>
            <Box p={1}>
              <Link component={NavLink} to="/dashboard" color="inherit">
                Dashboard
              </Link>
            </Box>
          </UserLoggedContent>
          <Box p={1}>
            <Link component={NavLink} to="/" color="inherit">
              Veículos
            </Link>
          </Box>
          <UserLoggedContent>
            <Box p={1}>
              <Link component={NavLink} to="/novo-veiculo" color="inherit">
                Novo veículo
              </Link>
            </Box>
            <Box p={1}>
              <MaterialLink
                onClick={() => {
                  userLoggedContext.update(null, null)
                }}
                color="white"
              >
                Sair
              </MaterialLink>
            </Box>
          </UserLoggedContent>
        </Toolbar>
      </AppBar>
    </>
  )
}
