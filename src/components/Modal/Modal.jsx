import React, { useEffect, useState } from 'react'
import { Card, Container, Box, Typography, Button } from '@material-ui/core'
import './Modal.css'

export default function Modal({ title, description, open, onClose }) {
  const [show, setShow] = useState(open)

  useEffect(() => {
    setShow(open)
  }, [open])

  if (!show) return <></>
  return (
    <div
      className="background"
      onClick={() => {
        setShow(false)
        onClose()
      }}
    >
      <Container maxWidth="xs">
        <Card onClick={e => e.stopPropagation()}>
          <Box p={4} className="modal-box">
            <Typography variant="h5" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
            <Box pt={3}>
              <Button
                variant="contained"
                color={'secondary'}
                fullWidth
                onClick={() => {
                  setShow(false)
                  onClose()
                }}
              >
                Fechar
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </div>
  )
}
