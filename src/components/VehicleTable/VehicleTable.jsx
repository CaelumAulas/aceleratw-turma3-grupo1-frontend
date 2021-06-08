import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import React from 'react'
import { formatToCurrency } from '../../infraestructure/currency'
import UserLoggedContent from '../UserLoggedContent/UserLoggedContent'

export default function VehicleTable({
  vehicles = [],
  onDeleteHandler = () => {},
  onEditHandler = () => {},
}) {
  if (vehicles.length === 0) return <p>Não há veículos a venda.</p>

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="30%">Marca</TableCell>
            <TableCell width="40%">Modelo</TableCell>
            <TableCell width="5%">Ano</TableCell>
            <TableCell width="10%">Valor</TableCell>
            <UserLoggedContent>
              <TableCell width="15%">Ações</TableCell>
            </UserLoggedContent>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle, index) => (
            <TableRow hover key={index}>
              <TableCell component="th" scope="row">
                {vehicle.brand}
              </TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{formatToCurrency(vehicle.price)}</TableCell>
              <UserLoggedContent>
                <TableCell>
                  <IconButton
                    onClick={onEditHandler}
                    color="inherit"
                    aria-label="Editar item"
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => onDeleteHandler(vehicle.id)}
                    color="inherit"
                    aria-label="Apagar item"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </UserLoggedContent>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
