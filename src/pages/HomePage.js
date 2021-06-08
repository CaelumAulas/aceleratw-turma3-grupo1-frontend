import { Box, Container, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleTable from '../components/VehicleTable/VehicleTable'
import ApiListVehicles from '../infraestructure/api/ApiListVehicles'
import ApiDeleteVehicle from '../infraestructure/api/ApiDeleteVehicle'

export default function HomePage() {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)

  async function callApiListVehicles() {
    try {
      const response = await ApiListVehicles()
      setVehicles(response.data)
      setLoading(false)
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
        {loading && <CircularProgress show />}
        {!loading && (
          <VehicleTable
            vehicles={vehicles}
            onEditHandler={() => alert('Redicionar para a página de edição')}
            onDeleteHandler={async id => {
              if (window.confirm('Tem certeza que deseja apagar este item?')) {
                await callApiDeleteVehicle(id)
              }
            }}
          />
        )}
      </Box>
    </Container>
  )
}
