import { TextField } from '@material-ui/core'
import { formatToCurrency } from 'infraestructure/currency'
import { useRef, useState } from 'react'

export default function CurrencyInput({ value, onChange, ...rest }) {
  const input = useRef()
  const [formmatedValue, setFormattedValue] = useState(formatToCurrency(value))

  function getOnlyNumbersFromInputValue() {
    if (!input.current) return
    let onlyNumbers = input.current.value.replace(/\D+/g, '') / 100
    return onlyNumbers
  }

  function onChangeInternal() {
    let onlyNumbers = getOnlyNumbersFromInputValue()
    if (!onlyNumbers) return
    setFormattedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
  }

  function onBlurInternal() {
    let onlyNumbers = getOnlyNumbersFromInputValue()
    if (!onlyNumbers) return
    setFormattedValue(formatToCurrency(onlyNumbers))
    onChange(onlyNumbers)
  }

  return (
    <TextField
      {...rest}
      inputRef={input}
      onChange={onChangeInternal}
      onBlur={onBlurInternal}
      value={formmatedValue}
      type='text'
    />
  )
}
