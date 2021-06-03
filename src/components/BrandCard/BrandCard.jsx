import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { formatToCurrency } from '../../infraestructure/currency'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined'

export default function BrandCard({ brand, totalVehicles, amount }) {
  return (
    <Box mr={2} mb={2}>
      <Card style={{ width: '250px' }}>
        <CardContent>
          <Box mb={5}>
            <DriveEtaOutlinedIcon color="primary" />
            <Typography variant="h4" component="h1" gutterBottom>
              {brand}
            </Typography>
          </Box>
          <Typography variant="body2" component="p" color="textSecondary">
            Total de
          </Typography>
          <Typography variant="h5" component="h2">
            {totalVehicles} {totalVehicles === 1 ? 'Veículo' : 'Veículos'}
          </Typography>
          <Typography variant="body2" component="p">
            {formatToCurrency(amount)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            colorhov
            disableElevation
          >
            Ver Todos
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
