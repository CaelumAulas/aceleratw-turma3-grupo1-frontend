import { Box, Container, Paper } from '@material-ui/core'
import Modal from 'components/Modal/Modal'
import PageTitle from 'components/PageTitle/PageTitle'
import VehicleForm from 'components/VehicleForm/VehicleForm'
import NotificationContext from 'contexts/NotificationContext'
import VehicleFlowFormValidationsContext from 'contexts/VehicleFlowFormValidationsContext'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from 'infraestructure/validations/form/form'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'

export default function UpdateVehiclePage() {
  const history = useHistory()
  const notification = useContext(NotificationContext)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    id: 2,
    brand: 'Fiat',
    model: 'Uno',
    year: 2020,
    price: '9929292',
  })
  const {
    params: { id },
  } = useRouteMatch()

  return (
    <>
      <Modal
        title={'Erro inesperado!'}
        description={
          'Não foi possível criar o novo veículo. Por favor, tente novamente mais tarde.'
        }
        open={showModal}
        onClose={() => setShowModal(false)}
      />
      <Container maxWidth="xs">
        <Paper elevation={3}>
          <Box p={3}>
            <PageTitle title={`${formData.brand} ${formData.model}`} />
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
