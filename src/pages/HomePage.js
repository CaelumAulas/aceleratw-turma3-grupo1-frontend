import { Box, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
import { deleteVehicle, listVehicles } from '../infraestructure/api/vehicles'

function sortVehiclesList(vehicles) {
  vehicles = vehicles.sort((a, b) => {
    if (a.brand < b.brand) return -1
    if (a.brand > b.brand) return 1
    return 0
  })
  return vehicles
}

export default function HomePage() {
  const [vehicles, setVehicles] = useState([])

  async function callApiListVehicles() {
    try {
      const response = await listVehicles()
      setVehicles(sortVehiclesList(response.data))
    } catch (e) {}
  }

  useEffect(() => {
    callApiListVehicles()
  }, [])

  async function callApiDeleteVehicle(id) {
    try {
      await deleteVehicle(id)
    } catch (e) {}
  }
  return (
    <Container maxWidth="lg">
      <PageTitle title="Veículos disponíveis" />
      <Box mt={4}>
        <VehicleTable
          vehicles={vehicles}
          onEditHandler={() => alert('Redicionar para a página de edição')}
          onDeleteHandler={async id => {
            if (window.confirm('Tem certeza que deseja apagar este item?')) {
              await callApiDeleteVehicle(id)
            }
          }}
        />
      </Box>
    </Container>
  )
}
