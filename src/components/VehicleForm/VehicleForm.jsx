/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import CurrencyInput from 'components/CurrencyInput/CurrencyInput'
import VehicleFlowFormValidationsContext from 'contexts/VehicleFlowFormValidationsContext'
import useFormValidators from 'hooks/useFormValidators'
import { listBrands } from 'infraestructure/api/brand'
import React, { useContext, useEffect, useState } from 'react'

export default function VehicleForm({
  onChange,
  onSubmit,
  label = 'Enviar',
  value = {
    brand: {
      name: '',
    },
    model: '',
    year: '2021',
    price: '0',
  },
}) {
  const [formData, setFormData] = useState(value)
  const [brands, setBrands] = useState([])

  async function callBrands() {
    const { data: { content } } = await listBrands()
    setBrands(content)
  }

  function updateFieldValue(field) {
    setFormData({
      ...formData,
      ...field,
    })
  }

  useEffect(() => {
    onChange(formData)
    callBrands()
  }, [formData])

  const formValidations = useContext(VehicleFlowFormValidationsContext)
  const [errors, validateFormField, isFormValid, validateForm] =
    useFormValidators(formValidations)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        validateForm(formData)
        if (isFormValid()) onSubmit(formData)
      }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor='brand'>Selecione o fabricante</InputLabel>
        <Select
          fullWidth
          inputProps={{
            name: 'brand',
            id: 'brand',
          }}
          value={formData.brand.name}
          onChange={e =>
            updateFieldValue({
              brand: {
                name: e.target.value,
              },
            })
          }
          required
        >
          {brands.map((brand) => (
            <MenuItem value={brand.name} key={brand.id}>
              {brand.name}
            </MenuItem>
          ))}
          <MenuItem value='outro'>
            Outro
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        variant='standard'
        margin='dense'
        name='model'
        label='Modelo'
        fullWidth
        required
        value={formData.model}
        onChange={e =>
          updateFieldValue({
            model: e.target.value,
          })
        }
        onBlur={validateFormField}
        helperText={errors.model.text}
      />

      <TextField
        variant='standard'
        margin='dense'
        type='number'
        name='year'
        label='Ano'
        fullWidth
        required
        value={formData.year}
        onChange={e =>
          updateFieldValue({
            year: e.target.value,
          })
        }
        onBlur={validateFormField}
        helperText={errors.year.text}
      />

      <CurrencyInput
        variant='standard'
        margin='dense'
        name='price'
        label='Valor'
        fullWidth
        required
        value={formData.price}
        onChange={price => updateFieldValue({ price })}
      />

      <Box mt={2}>
        <Button
          type='submit'
          disableElevation
          variant='contained'
          color='secondary'
        >
          {label}
        </Button>
      </Box>
    </form>
  )
}
