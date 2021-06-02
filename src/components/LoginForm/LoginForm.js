import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import React, { useContext } from 'react'
import LoginFormValidations from '../../contexts/LoginFormValidations'
import useFormValidators from '../../hooks/useFormValidators'
export default function LoginForm() {
  const context = useContext(LoginFormValidations)
  const [errors, validateFields, isFormValid] = useFormValidators(context)
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <TextField
        variant="standard"
        margin="dense"
        name="user"
        label="Usuário"
        onBlur={validateFields}
        fullWidth
        required
        helperText={errors.user.text}
      />
      <TextField
        variant="standard"
        margin="dense"
        onBlur={validateFields}
        name="password"
        label="Senha"
        type="password"
        helperText={errors.password.text}
        fullWidth
        required
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          disabled={isFormValid() ? false : true}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Fazer Login
        </Button>
        <p>
          ou{' '}
          <Link href="#" onClick={() => {}}>
            Cadastre-se {context.olar}
          </Link>
        </p>
      </Box>
      <Box mt={3}>
        {!isFormValid() && (
          <Alert severity="warning">
            Necessário corrigir os erros antes de enviar.
          </Alert>
        )}
      </Box>
    </form>
  )
}
