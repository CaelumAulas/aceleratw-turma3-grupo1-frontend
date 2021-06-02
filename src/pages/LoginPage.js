import Container from '@material-ui/core/Container'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box, Paper, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={2}>
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" align="center" component="h2">
              Acesse o Carango Bom
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
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary">
                Fazer Login
              </Button>
              <p>
                ou{' '}
                <Link href="#" onClick={() => {}}>
                  Cadastre-se
                </Link>
              </p>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  )
}
