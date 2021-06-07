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
  const [modalErrors, setModalErrors] = useState({
    title: 'Não foi possível logar',
    description: 'Tente novamente mais tarde.',
  })
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
        userLoggedContext.update('acelera-grupo-1', 'Grupo 1')
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
        title={modalErrors.title}
        description={modalErrors.description}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
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
    </>
  )
}
