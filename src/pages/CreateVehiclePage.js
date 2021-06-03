import { Box, Container, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CreateVehicleForm from '../components/CreateVehicleForm/CreateVehicleForm'

export default function CreateVehiclePage() {
  const [formData, setFormData] = useState({})

  console.log(formData)

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb="0.5rem" mt="0.5rem">
            <Typography variant="h5" component="h2">
              Cadastre um novo veículo
            </Typography>
            <p></p>
          </Box>

          <CreateVehicleForm
            onChange={formData => setFormData(formData)}
            onSubmit={data => console.log(data)}
          />
        </Box>
      </Paper>
    </Container>
  )
}
