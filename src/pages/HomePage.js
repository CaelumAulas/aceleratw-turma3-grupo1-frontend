import { Box, Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import VehicleTable from 'components/VehicleTable/VehicleTable'
import { deleteVehicle, listVehicles } from 'infraestructure/api/vehicles'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
  const [vehicles, setVehicles] = useState([])

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
