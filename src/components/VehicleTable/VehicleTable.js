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

export default function VehicleTable({ vehicles }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="20%">Marca</TableCell>
            <TableCell width="30%">Modelo</TableCell>
            <TableCell width="10%">Ano</TableCell>
            <TableCell width="20%">Valor</TableCell>
            <TableCell width="20%"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map(vehicle => (
            <TableRow hover>
              <TableCell component="th" scope="row">
                {vehicle.brand}
              </TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{formatToCurrency(vehicle.price)}</TableCell>
              <TableCell>
                <IconButton color="inherit" aria-label="Editar item">
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Apagar item">
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
