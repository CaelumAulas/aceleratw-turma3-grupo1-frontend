import { createContext } from 'react'

const VehicleFlowFormValidations = createContext({
  brand: noValidation,
  model: noValidation,
  year: noValidation,
})

function noValidation(dados) {
  return { isValid: true, text: '' }
}

export default VehicleFlowFormValidations
