const { render, screen } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { default: PrivateRoute } = require('./PrivateRoute')
import React from 'react'
const {
  default: UserLoggedContext,
} = require('../../contexts/UserLoggedContext')

function renderComponentWithUserLogged() {
  return render(
    <UserLoggedContext.Provider value={{ user: { username: 'user' } }}>
      <MemoryRouter>
        <PrivateRoute>
          <div>Hello private content</div>
        </PrivateRoute>
      </MemoryRouter>
    </UserLoggedContext.Provider>,
  )
}

function renderComponentWithoutUserLogged() {
  return render(
    <MemoryRouter>
      <PrivateRoute>
        <div>Hello private contentt</div>
      </PrivateRoute>
    </MemoryRouter>,
  )
}

describe('<PrivateRoute />', () => {
  let component

  it('Must render correctly', () => {
    component = renderComponentWithUserLogged()
    expect(component).toMatchSnapshot()
  })
  it('Must render content when user is logged', () => {
    component = renderComponentWithUserLogged()
    const content = component.getByText(/hello private content/i)
    expect(content).toBeInTheDocument()
  })
  it('Must not render content when user is not logged', () => {
    let component = renderComponentWithoutUserLogged()
    const content = component.queryByText(/hello private content/i)
    expect(content).not.toBeInTheDocument()
  })
})
