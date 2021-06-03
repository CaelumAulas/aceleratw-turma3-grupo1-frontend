import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { formatToCurrency } from '../../infraestructure/currency'

export default function BrandCard({ brand, totalVehicles, amount }) {
  return (
    <Box mr={2}>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            {brand}
          </Typography>
          <Typography variant="h5" component="h2">
            {totalVehicles} {totalVehicles === 1 ? 'Veículo' : 'Veículos'}
          </Typography>
          <Typography variant="body2" component="p">
            {formatToCurrency(amount)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Veículos</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
