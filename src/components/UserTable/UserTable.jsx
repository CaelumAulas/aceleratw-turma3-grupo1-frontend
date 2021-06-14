import { Card, IconButton } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import React from 'react'

export default function UserTable({
  users = [],
  onDeleteHandler = () => {},
  onEditHandler = () => {},
  filters = { items: [] },
}) {
  const columns = [
    {
      field: 'username',
      headerName: 'Usuário',
      width: 200,
      flex: 2,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: params => (
        <>
          <IconButton
            onClick={() => onEditHandler(params.row.id)}
            color="inherit"
            aria-label="Editar item"
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => onDeleteHandler(params.row.id)}
            color="inherit"
            aria-label="Apagar item"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </>
      ),
    },
  ]

  if (users.length === 0) return <></>
  return (
    <Card style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        disableSelectionOnClick
        rows={users}
        columns={columns}
        filterModel={filters}
      />
    </Card>
  )
}
