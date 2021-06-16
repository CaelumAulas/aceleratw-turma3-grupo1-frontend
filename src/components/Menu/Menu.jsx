import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PeopleIcon from '@material-ui/icons/People'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import UserLoggedContent from 'components/UserLoggedContent/UserLoggedContent'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Menu({ open, onClose }) {
  const history = useHistory()
  function navigate(route) {
    history.push(route)
    onClose()
  }
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={() => navigate('/entrar')}>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary={'Entrar no sistema'} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon>
            <DriveEtaIcon />
          </ListItemIcon>
          <ListItemText primary={'Todos veículos'} />
        </ListItem>
        <UserLoggedContent>
          <ListItem button onClick={() => navigate('/dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/novo-veiculo')}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={'Novo veículo'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/usuarios')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={'Todos Usuários'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/novo-usuario')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary={'Novo usuário'} />
          </ListItem>
          <ListItem button onClick={() => navigate('/sair')}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={'Sair do sistema'} />
          </ListItem>
        </UserLoggedContent>
        <Divider />
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
          <ListItemText primary={'Fechar menu'} />
        </ListItem>
      </List>
    </Drawer>
  )
}
