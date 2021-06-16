import { Box, Container, Paper } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import VehicleForm from 'components/VehicleForm/VehicleForm'
import NotificationContext from 'contexts/NotificationContext'
import VehicleFlowFormValidationsContext from 'contexts/VehicleFlowFormValidationsContext'
import { updateVehicle } from 'infraestructure/api/vehicles'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from 'infraestructure/validations/form/form'
import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function UpdateVehiclePage() {
  const history = useHistory()
  const {
    state: { vehicle },
  } = useLocation()
  const [formData, setFormData] = useState(vehicle)
  const notification = useContext(NotificationContext)

  async function callUpdateVehicle() {
    const response = await updateVehicle(vehicle.id, {
      brandName: formData.brand.name,
      model: formData.model,
      year: formData.year,
      price: formData.price,
    })
    const { status } = response
    if (status === 200) {
      history.push('/')
      notification.update({
        message: 'Veículo atualizado com sucesso!',
      })
    }
  }

  return (
    <>
      <Container maxWidth='xs'>
        <Paper elevation={3}>
          <Box p={3}>
            <PageTitle
              size='small'
              title={`${formData.brand.name} ${formData.model}`}
            />
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
                onSubmit={callUpdateVehicle}
                label='Editar'
              />
            </VehicleFlowFormValidationsContext.Provider>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
