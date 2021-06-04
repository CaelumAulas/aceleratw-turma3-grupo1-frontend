import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import BrandCard from '../components/BrandCard/BrandCard'
import PageTitle from '../components/PageTitle/PageTitle'

export default function DashboardPage() {
  return (
    <>
      <Container maxWidth="lg">
        <PageTitle title="Dashboard" />
        <Box display="flex" flexWrap="wrap">
          <BrandCard brand="Chevrolet" totalVehicles={28} amount={27617000} />
          <BrandCard brand="Ford" totalVehicles={8} amount={2579800} />
          <BrandCard brand="BMW" totalVehicles={312} amount={2000000} />
          <BrandCard brand="Volkswagen" totalVehicles={228} amount={53600} />
        </Box>
      </Container>
    </>
  )
}
