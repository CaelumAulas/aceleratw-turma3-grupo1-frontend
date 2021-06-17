const { render, screen } = require('@testing-library/react')
const { default: Logo } = require('./Logo')
import React from 'react'

describe('<Logo />', () => {
  let component
  beforeEach(() => {
    component = render(<Logo />)
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
