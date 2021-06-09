import { Box, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
import ApiDeleteVehicle from '../infraestructure/api/ApiDeleteVehicle'
import ApiListVehicles from '../infraestructure/api/ApiListVehicles'

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
      const response = await ApiListVehicles()
      setVehicles(sortVehiclesList(response.data))
    } catch (e) {}
  }

  useEffect(() => {
    callApiListVehicles()
  }, [])

  async function callApiDeleteVehicle(id) {
    try {
      await ApiDeleteVehicle(id)
      callApiListVehicles()
    } catch (e) {}
  }
  return (
    <Container maxWidth="lg">
      <PageTitle title="Veículos" subtitle="disponíveis para compra" />
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
