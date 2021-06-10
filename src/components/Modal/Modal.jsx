import { Box, Button, Card, Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import React, { useEffect, useState } from 'react'
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
            <PageTitle title={title} intro={description} />
            <Box pt={3}>
              <Button
                disableElevation
                variant="contained"
                color={'secondary'}
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
