const { render, screen } = require('@testing-library/react')
const { default: PageTitle } = require('./PageTitle')
import React from 'react'

describe('<PageTitle />', () => {
  let component
  beforeEach(() => {
    component = render(
      <PageTitle
        title='Page title goes here'
        subtitle='Sub title'
        intro='Small intro'
      />,
    )
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('Must renders title', () => {
    const title = screen.getByText(/page title goes here/i)
    expect(title).toBeInTheDocument()
  })
  it('Must renders subtitle', () => {
    const subtitle = screen.getByText(/sub title/i)
    expect(subtitle).toBeInTheDocument()
  })
  it('Must renders intro', () => {
    const subtitle = screen.getByText(/small intro/i)
    expect(subtitle).toBeInTheDocument()
  })
})
