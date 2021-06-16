const { render, screen } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { default: Header } = require('./Header')
import React from 'react'

describe('<Header />', () => {
  let component
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
