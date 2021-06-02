import { createContext } from 'react'

const LoginFormValidations = createContext({
  user: noValidation,
  password: noValidation,
})

function noValidation(dados) {
  return { isValid: true, text: '' }
}
export default LoginFormValidations
