import React from 'react'

function Logo() {
  return (
    <img
      src='/images/logo.png'
      style={{
        width: 120,
        position: 'relative',
        top: 4,
        filter: 'brightness(2000%)',
      }}
    />
  )
}

export default Logo
