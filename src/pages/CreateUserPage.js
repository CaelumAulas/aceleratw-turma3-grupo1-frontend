import { Box, Paper, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import RegisterUserForm from '../components/RegisterUserForm/RegisterUserForm'
import UserFlowFormValidations from '../contexts/UserFlowFormValidations'
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
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" component="h2">
              Registre-se
            </Typography>
            <p>
              Ficamos felizes com seu interesse em se registrar no Carango Bom.
              Preencha com seu usuário, e uma senha forte.
            </p>
          </Box>
          <UserFlowFormValidations.Provider
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
          </UserFlowFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
