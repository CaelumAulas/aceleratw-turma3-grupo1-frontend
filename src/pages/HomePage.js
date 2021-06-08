import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
import ApiListVehicles from '../infraestructure/api/ApiListVehicles'
import ApiDeleteVehicle from '../infraestructure/api/ApiDeleteVehicle'

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
      const { data } = await ApiDeleteVehicle(id)
      alert(data.code)
    } catch (e) {}
  }

  return (
    <Container maxWidth="lg">
      <PageTitle title="Veículos disponíveis para compra" />
      <Box mt={4}>
        <VehicleTable
          vehicles={vehicles}
          onEditHandler={() => alert('Redicionar para a página de edição')}
          onDeleteHandler={async (id) => {
            if (window.confirm('Tem certeza que deseja apagar este item?')) {
              await callApiDeleteVehicle(id)
            }
          }}
        />
      </Box>
    </Container>
  )
}
