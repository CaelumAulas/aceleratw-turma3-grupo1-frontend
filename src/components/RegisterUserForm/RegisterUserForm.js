import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import React, { useContext, useState } from 'react'
import UserFlowFormValidations from '../../contexts/UserFlowFormValidations'
import useFormValidators from '../../hooks/useFormValidators'

export default function RegisterUserForm({ onSubmit, onChange }) {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    passwordConfirmation: '',
  })

  function updateFieldValue(event, field) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
    onChange(formData)
  }

  const context = useContext(UserFlowFormValidations)
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
        value={formData.user}
        helperText={errors.user.text}
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
      <TextField
        variant="standard"
        margin="dense"
        onBlur={validateFields}
        name="passwordConfirmation"
        label="Confirmação de senha"
        type="password"
        value={formData.passwordConfirmation}
        helperText={errors.passwordConfirmation.text}
        onChange={event => updateFieldValue(event, 'passwordConfirmation')}
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
          Cadastrar
        </Button>
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
