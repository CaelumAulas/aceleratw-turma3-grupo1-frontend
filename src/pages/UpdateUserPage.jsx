import { Box, Container, Paper } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import UserForm from 'components/UserForm/UserForm'
import NotificationContext from 'contexts/NotificationContext'
import UserFlowFormValidationsContext from 'contexts/UserFlowFormValidationsContext'
import { updateUser } from 'infraestructure/api/user'
import {
  validatePassword,
  validatePasswordConfirmation,
  validateUser,
} from 'infraestructure/validations/form/form'
import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function UpdateVehiclePage() {
  const [formData, setFormData] = useState({})
  const {
    state: { user },
  } = useLocation()
  const notification = useContext(NotificationContext)
  const history = useHistory()

  async function callApiUpdateUser() {
    const response = await updateUser(user.username, {
      username: formData.username,
      password: formData.password,
    })
    const { status } = response
    if (status === 200) {
      history.push('/usuarios')
      notification.update({
        message: 'Usuário atualizado com sucesso!',
      })
    }
  }

  return (
    <>
      <Container maxWidth='xs'>
        <Paper elevation={3}>
          <Box p={3}>
            <PageTitle size='small' title={`Alterar senha`} />
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
                editMode={true}
                value={user}
                onChange={formData => setFormData(formData)}
                onSubmit={callApiUpdateUser}
                label='Alterar'
              />
            </UserFlowFormValidationsContext.Provider>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
