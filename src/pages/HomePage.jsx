import { Box, Button, Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import VehicleTable from 'components/VehicleTable/VehicleTable'
import { deleteVehicle, listVehicles } from 'infraestructure/api/vehicles'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'

export default function HomePage() {
  const [vehicles, setVehicles] = useState([])
  const history = useHistory()

  async function callApiListVehicles() {
    const response = await listVehicles()
    setVehicles(response.data.content)
  }

  async function callApiDeleteVehicle(id) {
    await deleteVehicle(id)
    await callApiListVehicles()
  }

  useEffect(() => {
    callApiListVehicles()
  }, [])

  const route = useRouteMatch()
  const brand = route.params.fabricante

  function getTableFilters() {
    return {
      items: [
        {
          columnField: 'brand',
          operatorValue: 'contains',
          value: brand,
        },
      ],
    }
  }

  function handleEditing(vehicle) {
    history.push(`/veiculo/editar/${vehicle.id}`, { vehicle })
  }

  return (
    <Container maxWidth='lg'>
      {!brand && <PageTitle title='Veículos disponíveis' />}
      {brand && (
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <PageTitle title={`Veículos disponíveis – ${brand}`} />
          <Button variant='text' component={Link} to='/'>
            Ver todos veículos
          </Button>
        </Box>
      )}
      <VehicleTable
        filters={getTableFilters()}
        vehicles={vehicles}
        onEditHandler={handleEditing}
        onDeleteHandler={async id => {
          if (window.confirm('Tem certeza que deseja apagar este item?')) {
            await callApiDeleteVehicle(id)
          }
        }}
      />
    </Container>
  )
}
