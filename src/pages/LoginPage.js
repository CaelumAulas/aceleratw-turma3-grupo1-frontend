import Container from '@material-ui/core/Container'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box, Typography } from '@material-ui/core'

export default function LoginPage() {
  return (
    <>
      <Container maxWidth="xs">
        <Box mb="0.5rem" mt="0.5rem">
          <Typography variant="h4" component="h2">
            Acesso ao sistema
          </Typography>
        </Box>
        <form noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="dense"
            label="Usuário"
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="dense"
            label="Senha"
            type="password"
            fullWidth
            required
          />
          <Button variant="text" color="primary">
            Fazer Login
          </Button>
        </form>
      </Container>
    </>
  )
}
