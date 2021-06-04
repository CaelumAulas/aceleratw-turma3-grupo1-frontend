import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import PageTitle from '../components/PageTitle/PageTitle'
import UserFlowFormValidations from '../contexts/UserFlowFormValidations'
import {
  validatePassword,
  validateUser,
} from '../infraestructure/validations/form/form'

export default function LoginPage() {
  const [formData, setFormData] = useState({})

  console.log(formData)

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <PageTitle title="Acesse o Carango Bom" />
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
