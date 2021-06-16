import { AppBar, Box, Container } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from 'components/Menu/Menu'
import UserLoggedContent from 'components/UserLoggedContent/UserLoggedContent'
import NotificationContext from 'contexts/NotificationContext'
import UserLoggedContext from 'contexts/UserLoggedContext'
import React, { useContext, useState } from 'react'
import { Link as NavLink } from 'react-router-dom'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
  }))
  const userContext = useContext(UserLoggedContext)
  const notificationContext = useContext(NotificationContext)

  const classes = useStyles()
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Menu open={showMenu} onClose={() => setShowMenu(false)} />
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              <Link component={NavLink} to='/' color='inherit'>
                <img
                  src='/images/logo.png'
                  style={{
                    width: 100,
                    position: 'relative',
                    top: 4,
                  }}
                />
              </Link>
            </Typography>
            <Box p={1}>
              <Link component={NavLink} to='/' color='inherit'>
                Todos veículos
              </Link>
            </Box>
            {!userContext.user && (
              <Box p={1}>
                <Link component={NavLink} to='/entrar' color='inherit'>
                  Entrar
                </Link>
              </Box>
            )}
            <UserLoggedContent>
              <Box p={1}>
                <Link component={NavLink} to='/sair' color='inherit'>
                  Sair
                </Link>
              </Box>
            </UserLoggedContent>
            <IconButton
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={() => setShowMenu(!showMenu)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
