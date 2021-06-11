import { Box, Container, Paper } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import VehicleForm from 'components/VehicleForm/VehicleForm'
import VehicleFlowFormValidationsContext from 'contexts/VehicleFlowFormValidationsContext'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from 'infraestructure/validations/form/form'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function UpdateVehiclePage({ location }) {
  const {
    state: { vehicle },
  } = useLocation()
  const [formData, setFormData] = useState(vehicle)

  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={3}>
          <Box p={3}>
            <PageTitle title={`${formData.brand.name} ${formData.model}`} />
            <VehicleFlowFormValidationsContext.Provider
              value={{
                brand: validateCarBrand,
                year: validateCarYear,
                model: validateCarModel,
              }}
            >
              <VehicleForm
                value={formData}
                onChange={formData => setFormData(formData)}
                onSubmit={() => {}}
                label="Editar"
              />
            </VehicleFlowFormValidationsContext.Provider>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
