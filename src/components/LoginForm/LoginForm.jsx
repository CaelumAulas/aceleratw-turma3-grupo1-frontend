import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import React, { useContext, useState } from 'react'
import UserFlowValidations from '../../contexts/UserFlowFormValidationsContext'
import useFormValidators from '../../hooks/useFormValidators'
import { Link as NavLink } from 'react-router-dom'

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
  const [errors, validateFormField, isFormValid, validateForm] =
    useFormValidators(context)
  return (
    <form
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault()
        validateForm(formData)
        if (isFormValid()) onSubmit(formData)
      }}
    >
      <TextField
        variant="standard"
        margin="dense"
        name="user"
        label="Usuário"
        onBlur={validateFormField}
        fullWidth
        required
        helperText={errors.user.text}
        value={formData.user}
        onChange={event => updateFieldValue(event, 'user')}
      />
      <TextField
        variant="standard"
        margin="dense"
        onBlur={validateFormField}
        name="password"
        label="Senha"
        type="password"
        value={formData.password}
        helperText={errors.password.text}
        onChange={event => updateFieldValue(event, 'password')}
        fullWidth
        required
      />
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          disabled={isFormValid() ? false : true}
          variant="contained"
          disableElevation
          color="secondary"
          type="submit"
        >
          Fazer Login
        </Button>
        <p>
          ou{' '}
          <Link component={NavLink} to="/novo-usuario">
            Cadastre-se {context.olar}
          </Link>
        </p>
      </Box>
      <Box mt={3}>
        {!isFormValid() && (
          <Alert severity="warning">
            Necessário preencher as informações corretamente antes de continuar.
          </Alert>
        )}
      </Box>
    </form>
  )
}
