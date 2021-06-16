const { render, screen } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { default: BrandCard } = require('./BrandCard')
import React from 'react'

describe('<BrandCard />', () => {
  let component
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <BrandCard brand='Ford' totalVehicles='10' amount={200000} />
      </MemoryRouter>,
    )
  })
  it('Must renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('Must render title', () => {
    const title = screen.getByText(/ford/i)
    expect(title).toBeInTheDocument()
  })
  it('Must render total of vehicles', () => {
    const totalVehicles = screen.getByText(/10 veículos/i)
    expect(totalVehicles).toBeInTheDocument()
  })
  it('Must render the amount formatted', () => {
    const amount = screen.getByText('R$ 200.000,00'.trim())
    expect(amount).toBeInTheDocument()
  })
  it('Must render link to see all vehicles', () => {
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/fabricante/Ford')
  })
})
