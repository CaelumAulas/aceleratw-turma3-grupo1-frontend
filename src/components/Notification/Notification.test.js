const { render, screen } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { default: Notification } = require('./Notification')
import React from 'react'

describe('<Notification />', () => {
  let component
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Notification message='Simple message' />
      </MemoryRouter>,
    )
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('Must render with correct message', () => {
    const message = component.getByText(/simple message/i)
    expect(message).toBeInTheDocument()
  })
})
