import { Box, Paper, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import RegisterUserForm from '../components/RegisterUserForm/RegisterUserForm'
import {
  validatePassword,
  validateUser,
} from '../components/LoginForm/LoginForm.rules'
import LoginFormValidations from '../contexts/LoginFormValidations'

export default function CreateUserPage() {
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
          <LoginFormValidations.Provider
            value={{
              user: validateUser,
              password: validatePassword,
            }}
          >
            <RegisterUserForm />
          </LoginFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
