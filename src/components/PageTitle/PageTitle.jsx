import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function PageTitle({ title }) {
  return (
    <Box mb={4}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
    </Box>
  )
}
