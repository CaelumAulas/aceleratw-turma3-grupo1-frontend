import { Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import Modal from '../components/Modal/Modal'
import PageTitle from '../components/PageTitle/PageTitle'
import UserFlowFormValidations from '../contexts/UserFlowFormValidations'
import UserLogged from '../contexts/UserLogged'
import ApiLogin from '../infraestructure/api/ApiLogin'
import {
  validatePassword,
  validateUser,
} from '../infraestructure/validations/form/form'

export default function LoginPage() {
  const history = useHistory()
  const [formData, setFormData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const userLoggedContext = useContext(UserLogged)

  async function callApiLogin() {
    try {
      const response = await ApiLogin({
        user: formData.user,
        password: formData.password,
      })
      const { data } = response
      if (data.logado) {
        history.push('/')
        userLoggedContext.update(formData.user)
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
        title={'Não foi possível logar'}
        description={'Por favor, tente novamente mais tarde.'}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
      <Container maxWidth="xs">
        <Paper elevation={3}>
          <Box p={3}>
            <PageTitle title="Entrar" intro="Digite seu usuário e senha" />
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
    </>
  )
}
