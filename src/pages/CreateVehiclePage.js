import { Box, Container, Paper } from '@material-ui/core'
import CreateVehicleForm from 'components/CreateVehicleForm/CreateVehicleForm'
import Modal from 'components/Modal/Modal'
import PageTitle from 'components/PageTitle/PageTitle'
import NotificationContext from 'contexts/NotificationContext'
import VehicleFlowFormValidationsContext from 'contexts/VehicleFlowFormValidationsContext'
import { newVehicle } from 'infraestructure/api/vehicles'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from 'infraestructure/validations/form/form'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

export default function CreateVehiclePage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({})
  const history = useHistory()

  const notification = useContext(NotificationContext)

  async function callApiNewVehicle() {
    try {
      const response = await newVehicle({
        brand: formData.brand,
        model: formData.model,
        year: formData.year,
        price: formData.price,
      })
      const { status } = response
      if (status === 201) {
        history.push('/')
        notification.update({
          message: `O veículo ${formData.brand} ${formData.model} foi criado com sucesso!`,
          severity: 'success',
        })
      } else {
        setShowModal(true)
      }
    } catch (e) {
      setShowModal(true)
    }
  }

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
            <PageTitle title="Novo veículo" />

            <VehicleFlowFormValidationsContext.Provider
              value={{
                brand: validateCarBrand,
                year: validateCarYear,
                model: validateCarModel,
              }}
            >
              <CreateVehicleForm
                onChange={formData => setFormData(formData)}
                onSubmit={callApiNewVehicle}
              />
            </VehicleFlowFormValidationsContext.Provider>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
