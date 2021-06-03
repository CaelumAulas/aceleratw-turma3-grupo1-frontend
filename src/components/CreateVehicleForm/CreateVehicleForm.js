import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function CreateVehicleForm({onChange, onSubmit}) {
  
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '2021',
    price:'0'
  })
  
  //console.log(formData)
  
  const brands = ['Fiat', 'Jeep', 'Ford']

  function updateFieldValue(event, field) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
    onChange(formData)
  }

  return (
    <form onSubmit={(e) => { 
      e.preventDefault()
      onSubmit(formData)
    }}>
      <FormControl fullWidth>
        <InputLabel htmlFor="brand">Selecione uma marca</InputLabel>
        <Select
          fullWidth
          inputProps={{
            name: 'brand',
            id: 'brand',
          }}
          value={formData.brand}
          onChange={e => updateFieldValue(e, 'brand')}
        >
          {brands.map((brand, index) => (
            <MenuItem value={brand} key={index}> {brand} </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        variant="standard"
        margin="dense"
        name="model"
        label="Modelo"
        fullWidth
        required
        value={formData.model}
        onChange={e => updateFieldValue(e, 'model')}
      />

      <TextField
        variant="standard"
        margin="dense"
        type="number"
        name="year"
        label="Ano"
        fullWidth
        required
        value={formData.year}
        onChange={e => updateFieldValue(e, 'year')}
      />

      <TextField
        variant="standard"
        margin="dense"
        name="price"
        type="money"
        label="Valor"
        fullWidth
        required
        value={formData.money}
        onChange={e => updateFieldValue(e, 'price')}
      />

      <Box mt={2}>
        <Button type="submit" variant="contained" color="secondary">
          Enviar
        </Button>
      </Box>
    </form>
  )
}