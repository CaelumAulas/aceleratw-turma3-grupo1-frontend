import { Box, Typography } from '@material-ui/core'
import React from 'react'

export default function PageTitle({
  title,
  subtitle = '',
  intro = '',
  h1 = 'h4',
}) {
  return (
    <Box mb={2}>
      <Typography variant={h1} component='h1' color='primary' gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant='h6' component='h2' gutterBottom>
          {subtitle}
        </Typography>
      )}
      {intro && (
        <Typography variant='body2' component='h2'>
          {intro}
        </Typography>
      )}
    </Box>
  )
}
