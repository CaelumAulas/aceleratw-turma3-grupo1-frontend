import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import PageTitle from 'components/PageTitle/PageTitle'
import UserForm from 'components/UserForm/UserForm'
import UserFlowFormValidationsContext from 'contexts/UserFlowFormValidationsContext'
import UserLoggedContext from 'contexts/UserLoggedContext'
import { createUser } from 'infraestructure/api/user'
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
    await createUser({
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
      <Paper elevation={3} variant='outlined'>
        <Box p={3}>
          <Box mb='0.5rem'>
            <PageTitle
              size='small'
              title='Novo usuário'
              intro='Preencha o usuário, e uma senha forte.'
            />
          </Box>
          <UserFlowFormValidationsContext.Provider
            value={{
              username: validateUser,
              password: validatePassword,
              passwordConfirmation: passwordConfirmation =>
                validatePasswordConfirmation(
                  formData?.password,
                  passwordConfirmation,
                ),
            }}
          >
            <UserForm
              onChange={formData => setFormData(formData)}
              onSubmit={callApiRegisterUser}
            />
          </UserFlowFormValidationsContext.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
