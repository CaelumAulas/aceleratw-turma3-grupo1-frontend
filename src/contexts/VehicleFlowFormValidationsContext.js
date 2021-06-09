import { createContext } from 'react'

const VehicleFlowFormValidationsContext = createContext({
  brand: noValidation,
  model: noValidation,
  year: noValidation,
})

function noValidation(dados) {
  return { isValid: true, text: '' }
}

export default VehicleFlowFormValidationsContext
