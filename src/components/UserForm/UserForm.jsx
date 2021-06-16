import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import UserFlowFormValidationsContext from 'contexts/UserFlowFormValidationsContext'
import useFormValidators from 'hooks/useFormValidators'
import React, { useContext, useEffect, useState } from 'react'

export default function UserForm({
  value = {
    username: '',
    password: '',
    passwordConfirmation: '',
  },
  onSubmit,
  onChange,
  label = 'Cadastrar',
  editMode = false,
}) {
  const [formData, setFormData] = useState(value)

  function updateFieldValue(newValue) {
    setFormData({
      ...formData,
      ...newValue,
    })
  }

  const formValidations = useContext(UserFlowFormValidationsContext)
  useEffect(() => {
    onChange(formData)
  }, [formData])

  const [errors, validateFormField, isFormValid, validateForm] =
    useFormValidators(formValidations)

  return (
    <form
      autoComplete='off'
      onSubmit={event => {
        event.preventDefault()
        validateForm(formData)
        if (isFormValid()) onSubmit(formData)
      }}
    >
      <TextField
        variant='standard'
        margin='dense'
        name='username'
        label='Usuário'
        onBlur={validateFormField}
        fullWidth
        required
        disabled={editMode}
        value={formData.username}
        helperText={errors.username.text}
        onChange={event => updateFieldValue({ username: event.target.value })}
      />
      <TextField
        variant='standard'
        margin='dense'
        onBlur={validateFormField}
        name='password'
        label='Senha'
        type='password'
        value={formData.password}
        helperText={errors.password.text}
        onChange={event => updateFieldValue({ password: event.target.value })}
        fullWidth
        required
      />
      <TextField
        variant='standard'
        margin='dense'
        onBlur={validateFormField}
        name='passwordConfirmation'
        label='Confirmação de senha'
        type='password'
        value={formData.passwordConfirmation}
        helperText={errors.passwordConfirmation.text}
        onChange={event =>
          updateFieldValue({ passwordConfirmation: event.target.value })
        }
        fullWidth
        required
      />
      <Box mt={2} display='flex' justifyContent='space-between'>
        <Button
          disabled={isFormValid() ? false : true}
          variant='contained'
          color='secondary'
          type='submit'
          disableElevation
        >
          {label}
        </Button>
      </Box>
      <Box mt={3}>
        {!isFormValid() && (
          <Alert severity='warning'>
            Necessário preencher as informações corretamente antes de continuar.
          </Alert>
        )}
      </Box>
    </form>
  )
}
