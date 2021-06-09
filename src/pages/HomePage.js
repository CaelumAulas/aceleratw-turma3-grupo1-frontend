import { Box, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
import ApiDeleteVehicle from '../infraestructure/api/ApiDeleteVehicle'
import ApiListVehicles from '../infraestructure/api/ApiListVehicles'

export default function HomePage() {
  const [vehicles, setVehicles] = useState([])

  async function callApiListVehicles() {
    try {
      const response = await ApiListVehicles()
      setVehicles(response.data)
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
      <PageTitle title="Veículos disponíveis para compra" />
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
