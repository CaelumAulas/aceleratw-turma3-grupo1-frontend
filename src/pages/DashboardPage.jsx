import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useEffect, useState } from 'react'
import BrandCard from '../components/BrandCard/BrandCard'
import PageTitle from '../components/PageTitle/PageTitle'
import ApiListVehicles from '../infraestructure/api/ApiListVehicles'

export default function DashboardPage() {
  const [vehicles, setVehicles] = useState([])
  const [brands, setBrands] = useState([])

  async function callApiListVehicles() {
    try {
      const response = await ApiListVehicles()
      setVehicles(response.data)
    } catch (e) {}
  }

  function getBrands() {
    const brands = [...new Set(vehicles.map(vehicle => vehicle.brand))]
    setBrands(brands)
  }

  function getTotalVehiclesByBrand(brand) {
    return vehicles.filter(vehicle => vehicle.brand === brand).length
  }

  function getTotalPriceByBrand(brand) {
    const vehiclesForThisBrand = vehicles.filter(
      vehicle => vehicle.brand === brand,
    )
    return vehiclesForThisBrand.reduce(
      (previousValue, vehicle) => previousValue + vehicle.price,
      0,
    )
  }

  useEffect(() => {
    callApiListVehicles()
  }, [])

  useEffect(() => {
    getBrands()
  }, [vehicles])

  return (
    <>
      <Container maxWidth="lg">
        <PageTitle title="Dashboard" />
        <Box display="flex" flexWrap="wrap">
          {brands.map(brand => (
            <BrandCard
              brand={brand}
              totalVehicles={getTotalVehiclesByBrand(brand)}
              amount={getTotalPriceByBrand(brand)}
            />
          ))}
        </Box>
      </Container>
    </>
  )
}
