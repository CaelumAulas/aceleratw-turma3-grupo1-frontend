import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import RegisterUserForm from '../components/CreateUserForm/CreateUserForm'
import PageTitle from '../components/PageTitle/PageTitle'
import UserFlowFormValidationsContext from '../contexts/UserFlowFormValidationsContext'
import {
  validatePassword,
  validatePasswordConfirmation,
  validateUser,
} from '../infraestructure/validations/form/form'

export default function CreateUserPage() {
  const [formData, setFormData] = useState({})
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb="0.5rem">
            <PageTitle
              title="Cadastrar-se"
              intro="Ficamos felizes com seu interesse em se registrar no Carango Bom. Preencha com seu usuário, e uma senha forte."
            />
          </Box>
          <UserFlowFormValidationsContext.Provider
            value={{
              user: validateUser,
              password: validatePassword,
              passwordConfirmation: passwordConfirmation =>
                validatePasswordConfirmation(
                  formData?.password,
                  passwordConfirmation,
                ),
            }}
          >
            <RegisterUserForm
              onChange={formData => setFormData(formData)}
              onSubmit={data => console.log(data)}
            />
          </UserFlowFormValidationsContext.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
