import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
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

  return (
    <Container maxWidth="lg">
      <PageTitle title="Veículos disponíveis para compra" />
      <Box mt={4}>
        <VehicleTable
          vehicles={vehicles}
          onEditHandler={() => alert('Redicionar para a página de edição')}
          onDeleteHandler={() =>
            window.confirm('Tem certeza que deseja apagar este item?')
          }
        />
      </Box>
    </Container>
  )
}
