import Container from '@material-ui/core/Container'
import React from 'react'
import VehicleTable from '../components/VehicleTable/VehicleTable'

export default function HomePage() {
  return (
    <Container maxWidth="auto">
      <VehicleTable />
    </Container>
  )
}
