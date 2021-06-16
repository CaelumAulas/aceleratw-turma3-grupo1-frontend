const { render, screen } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { default: Menu } = require('./Menu')
import React from 'react'

describe('<Menu />', () => {
  let component
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>,
    )
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
