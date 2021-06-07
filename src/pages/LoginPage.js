import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import PageTitle from '../components/PageTitle/PageTitle'
import UserFlowFormValidations from '../contexts/UserFlowFormValidations'
import ApiLogin from '../infraestructure/api/ApiLogin'
import {
  validatePassword,
  validateUser,
} from '../infraestructure/validations/form/form'

export default function LoginPage() {
  const history = useHistory()
  const [formData, setFormData] = useState({})

  async function callApiLogin() {
    try {
      const response = await ApiLogin({
        user: formData.user,
        password: formData.password,
      })
      const { data } = response
      if (data.logado) {
        history.push('/')
      } else {
        alert('não foi possivel logar')
      }
    } catch (e) {
      alert('não foi possivel logar')
    }
  }

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
              onSubmit={callApiLogin}
            />
          </UserFlowFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
