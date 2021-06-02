import { Box, Paper, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import {
  validatePassword,
  validateUser,
} from '../components/LoginForm/LoginForm.rules'
import LoginFormValidations from '../contexts/LoginFormValidations'

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" component="h2">
              Acesse o Carango Bom
            </Typography>
          </Box>
          <LoginFormValidations.Provider
            value={{
              user: validateUser,
              password: validatePassword,
            }}
          >
            <LoginForm />
          </LoginFormValidations.Provider>
        </Box>
      </Paper>
    </Container>
  )
}
