import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import UserFlowFormValidationsContext from 'contexts/UserFlowFormValidationsContext'
import useFormValidators from 'hooks/useFormValidators'
import React, { useContext, useEffect, useState } from 'react'

export default function RegisterUserForm({ label, onSubmit, onChange }) {
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
  }

  const formValidations = useContext(UserFlowFormValidationsContext)
  useEffect(() => {
    onChange(formData)
    console.log(formData)
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
        name='user'
        label='Usuário'
        onBlur={validateFormField}
        fullWidth
        required
        value={formData.user}
        helperText={errors.user.text}
        onChange={event => updateFieldValue(event, 'user')}
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
        onChange={event => updateFieldValue(event, 'password')}
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
        onChange={event => updateFieldValue(event, 'passwordConfirmation')}
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
