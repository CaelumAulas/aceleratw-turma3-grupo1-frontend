import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export default function PageTitle({
  title,
  subtitle = '',
  intro = '',
  size = 'medium',
}) {
  const mapSizeToHeadingNumber = {
    big: 'h3',
    medium: 'h4',
    small: 'h5',
  }
  return (
    <Box mb={3}>
      <Typography
        variant={mapSizeToHeadingNumber[size]}
        component='h1'
        gutterBottom
      >
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

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  intro: PropTypes.string,
  size: PropTypes.string,
}
