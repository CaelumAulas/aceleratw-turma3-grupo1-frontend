import { Card, IconButton } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import UserLoggedContext from 'contexts/UserLoggedContext'
import { formatToCurrency } from 'infraestructure/currency'
import React, { useContext } from 'react'

export default function VehicleTable({
  vehicles = [],
  onDeleteHandler = () => {},
  onEditHandler = () => {},
  filters = { items: [] },
}) {
  const userContext = useContext(UserLoggedContext)
  const columns = [
    {
      field: 'brand',
      headerName: 'Fabricante',
      width: 200,
      valueGetter: params => params.row.brand.name,
      flex: 2,
    },
    { field: 'model', headerName: 'Modelo', flex: 3 },
    {
      field: 'year',
      headerName: 'Ano',
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Preço',
      description: 'This column has a value getter and is not sortable.',
      flex: 1,
      valueGetter: params => formatToCurrency(params.row.price),
    },
    {
      field: 'actions',
      headerName: 'Ações',
      flex: 1,
      sortable: false,
      filterable: false,
      hide: !userContext.user,
      renderCell: params => (
        <>
          <IconButton
            onClick={() => onEditHandler(params.row)}
            color='inherit'
            aria-label='Editar item'>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => onDeleteHandler(params.row.id)}
            color='inherit'
            aria-label='Apagar item'>
            <DeleteOutlineIcon />
          </IconButton>
        </>
      ),
    },
  ]

  if (vehicles.length === 0) return <>Não há veículos disponíveis.</>
  return (
    <Card style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        disableSelectionOnClick
        rows={vehicles}
        columns={columns}
        filterModel={filters}
      />
    </Card>
  )
}
