import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React from 'react'

export default function Notification({ severity, open, message }) {
  return (
    <Snackbar open={open}>
      <Alert severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}
