import { createContext } from 'react'

const UserFlowFormValidationsContext = createContext({
  username: noValidation,
  password: noValidation,
  passwordConfirmation: noValidation,
})

function noValidation() {
  return { isValid: true, text: '' }
}
export default UserFlowFormValidationsContext
