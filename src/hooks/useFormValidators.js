import React, { useState } from 'react'

function useFormValidators(validationsContext) {
  const initialState = generateInitialState(validationsContext)
  const [errors, setFormErrors] = useState(initialState)

  function validateFields(event) {
    const { name, value } = event.target
    const newState = { ...errors }
    newState[name] = validationsContext[name](value)
    setFormErrors(newState)
  }

  function isFormValid() {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false
      }
    }
    return true
  }

  return [errors, validateFields, isFormValid]
}

function generateInitialState(validations) {
  const initialState = {}
  for (let campo in validations) {
    initialState[campo] = { isValid: true, text: '' }
  }

  return initialState
}

export default useFormValidators
