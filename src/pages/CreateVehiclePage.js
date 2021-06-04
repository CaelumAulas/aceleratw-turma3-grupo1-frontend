import { Box, Container, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import CreateVehicleForm from '../components/CreateVehicleForm/CreateVehicleForm'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleFlowFormValidations from '../contexts/VehicleFlowFormValidation'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from '../infraestructure/validations/form/form'

export default function CreateVehiclePage() {
  const [formData, setFormData] = useState({})

  console.log(formData)

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <PageTitle title="Cadastre um novo veículo" />

          <VehicleFlowFormValidations.Provider
            value={{
              brand: validateCarBrand,
              year: validateCarYear,
              model: validateCarModel,
            }}
          >
            <CreateVehicleForm
              onChange={formData => setFormData(formData)}
              onSubmit={data => console.log(data)}
            />
          </VehicleFlowFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
