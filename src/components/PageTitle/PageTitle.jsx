import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'

export default function PageTitle({ title, subtitle = '' }) {
  return (
    <Box mb={5}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" component="h2">
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
