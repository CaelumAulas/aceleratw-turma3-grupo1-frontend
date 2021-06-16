import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import RegisterUserForm from 'components/CreateUserForm/CreateUserForm'
import PageTitle from 'components/PageTitle/PageTitle'
import UserFlowFormValidationsContext from 'contexts/UserFlowFormValidationsContext'
import UserLoggedContext from 'contexts/UserLoggedContext'
import { registerUser } from 'infraestructure/api/user'
import {
  validatePassword,
  validatePasswordConfirmation,
  validateUser,
} from 'infraestructure/validations/form/form'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

export default function CreateUserPage() {
  const [formData, setFormData] = useState({})
  const userLoggedContext = useContext(UserLoggedContext)
  const history = useHistory()

  async function callApiRegisterUser() {
    await registerUser({
      username: formData.user,
      password: formData.password,
    })
    if (!userLoggedContext.user.token) {
      history.push('/entrar')
      return
    }
    history.push('/usuarios')
  }
  return (
    <Container maxWidth='xs'>
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb='0.5rem'>
            <PageTitle
              size='small'
              title='Cadastrar-se'
              intro='Ficamos felizes com seu interesse em se registrar no Carango Bom. Preencha com seu usuário, e uma senha forte.'
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
              onSubmit={callApiRegisterUser}
            />
          </UserFlowFormValidationsContext.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
