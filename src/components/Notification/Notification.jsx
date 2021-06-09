import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'

export default function Notification({
  severity = 'info',
  open = true,
  message,
}) {
  const [show, setShow] = useState(open)

  useEffect(() => {
    setShow(open)
  }, [open])

  return (
    <Snackbar
      open={show}
      autoHideDuration={9000}
      onClose={() => {
        setShow(false)
      }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  )
}
