import { createContext } from 'react'

const UserFlowFormValidations = createContext({
  user: noValidation,
  password: noValidation,
  passwordConfirmation: noValidation,
})

function noValidation(dados) {
  return { isValid: true, text: '' }
}
export default UserFlowFormValidations
