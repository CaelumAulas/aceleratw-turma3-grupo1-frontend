import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import UserFlowValidations from 'contexts/UserFlowFormValidationsContext'
import useFormValidators from 'hooks/useFormValidators'
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { Link as NavLink } from 'react-router-dom'

export default function LoginForm({ onChange, onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  function updateFieldValue(event, field) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
  }

  useEffect(() => {
    onChange(formData)
  }, [formData])

  const context = useContext(UserFlowValidations)
  const [errors, validateFormField, isFormValid, validateForm] =
    useFormValidators(context)
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
        autoFocus
        variant='standard'
        margin='dense'
        name='username'
        label='Usuário'
        onBlur={validateFormField}
        fullWidth
        required
        helperText={errors.username.text}
        value={formData.username}
        onChange={event => updateFieldValue(event, 'username')}
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
      <Box
        mt={2}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Button
          disabled={isFormValid() ? false : true}
          variant='contained'
          disableElevation
          color='secondary'
          type='submit'
        >
          Fazer Login
        </Button>
        <p>
          ou{' '}
          <Link component={NavLink} to='/novo-usuario'>
            Cadastre-se {context.olar}
          </Link>
        </p>
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

LoginForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
