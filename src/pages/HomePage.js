import { Box, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import VehicleTable from '../components/VehicleTable/VehicleTable'

export default function HomePage() {
  const data = [
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
    {
      brand: 'Ford',
      model: 'Ka Sedan',
      price: 20000,
      year: 2020,
    },
  ]
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h1">
        Veículos disponíveis para compra
      </Typography>
      <Box mt={4}>
        <VehicleTable
          vehicles={data}
          onEditHandler={() => alert('Redicionar para a página de edição')}
          onDeleteHandler={() =>
            window.confirm('Tem certeza que deseja apagar este item?')
          }
        />
      </Box>
    </Container>
  )
}
