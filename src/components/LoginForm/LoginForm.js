import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import React, { useContext, useState } from 'react'
import UserFlowValidations from '../../contexts/UserFlowFormValidations'
import useFormValidators from '../../hooks/useFormValidators'
export default function LoginForm({ onChange, onSubmit }) {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  })

  function updateFieldValue(event, field) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
    onChange(formData)
  }

  const context = useContext(UserFlowValidations)
  const [errors, validateFields, isFormValid] = useFormValidators(context)
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault()
        onSubmit(formData)
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
        value={formData.user}
        onChange={event => updateFieldValue(event, 'user')}
      />
      <TextField
        variant="standard"
        margin="dense"
        onBlur={validateFields}
        name="password"
        label="Senha"
        type="password"
        value={formData.password}
        helperText={errors.password.text}
        onChange={event => updateFieldValue(event, 'password')}
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
