import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'

export default function PageTitle({ title, subtitle = '', intro = '' }) {
  return (
    <Box mb={2}>
      <Typography variant="h5" component="h1" color="primary" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" component="h2" gutterBottom>
          {subtitle}
        </Typography>
      )}
      {intro && (
        <Typography variant="body2" component="h2">
          {intro}
        </Typography>
      )}
    </Box>
  )
}
