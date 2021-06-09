import { Box, Container, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import CreateVehicleForm from '../components/CreateVehicleForm/CreateVehicleForm'
import PageTitle from '../components/PageTitle/PageTitle'
import VehicleFlowFormValidationsContext from '../contexts/VehicleFlowFormValidationsContext'
import { ApiNewVehicle } from '../infraestructure/api/ApiVehicles'
import {
  validateCarBrand,
  validateCarModel,
  validateCarYear,
} from '../infraestructure/validations/form/form'
import Modal from '../components/Modal/Modal'

export default function CreateVehiclePage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({})
  const history = useHistory()

  async function callApiNewVehicle() {
    try {
      const response = await ApiNewVehicle({
        brand: formData.brand,
        model: formData.model,
        year: formData.year,
        price: formData.price,
      })
      const { status } = response
      if (status === 201) {
        alert('Novo veículo cadastrado')
        history.push('/')
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
