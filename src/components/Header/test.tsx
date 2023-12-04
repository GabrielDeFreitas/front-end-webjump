import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render account links', () => {
    render(<Header />)

    const accessAccountLink = screen.getByRole('link', {
      name: /Acesse sua Conta/i
    })
    const signUpLink = screen.getByRole('link', { name: /Cadastre-se/i })

    expect(accessAccountLink).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })
})
