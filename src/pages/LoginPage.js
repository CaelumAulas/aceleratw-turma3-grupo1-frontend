import { Box, Paper, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import {
  validatePassword,
  validateUser,
} from '../infraestructure/validations/form/form'
import UserFlowFormValidations from '../contexts/UserFlowFormValidations'

export default function LoginPage() {
  const [formData, setFormData] = useState({})

  console.log(formData)

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" component="h2">
              Acesse o Carango Bom
            </Typography>
          </Box>
          <UserFlowFormValidations.Provider
            value={{
              user: validateUser,
              password: validatePassword,
            }}
          >
            <LoginForm
              onChange={formData => setFormData(formData)}
              onSubmit={data => console.log(data)}
            />
          </UserFlowFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
