import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import UserLoggedContent from 'components/UserLoggedContent/UserLoggedContent'
import { formatToCurrency } from 'infraestructure/currency'
import React from 'react'

export default function VehicleTable({
  vehicles = [],
  onDeleteHandler = () => {},
  onEditHandler = () => {},
}) {
  if (vehicles.length === 0) return <p>Não há veículos a venda.</p>

  return (
    <TableContainer component={Paper}>
      <Table>
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
