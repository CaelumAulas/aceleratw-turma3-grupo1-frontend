import Container from '@material-ui/core/Container'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box, Paper, Typography } from '@material-ui/core'

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={2}>
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" component="h2">
              Acesso ao sistema
            </Typography>
          </Box>
          <form noValidate autoComplete="off">
            <TextField
              variant="standard"
              margin="dense"
              label="Usuário"
              fullWidth
              required
            />
            <TextField
              variant="standard"
              margin="dense"
              label="Senha"
              type="password"
              fullWidth
              required
            />
            <Box mt={2}>
              <Button variant="contained" color="secondary">
                Fazer Login
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  )
}
