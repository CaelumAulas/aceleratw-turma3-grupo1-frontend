import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import BrandCard from '../components/BrandCard/BrandCard'

export default function DashboardPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          Dashboard
        </Typography>
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
