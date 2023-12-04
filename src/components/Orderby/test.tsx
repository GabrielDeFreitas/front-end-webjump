import { render, screen } from '@testing-library/react'

import Orderby from '.'

describe('<Orderby />', () => {
  it('should render the heading', () => {
    const { container } = render(<Orderby />)

    expect(screen.getByRole('heading', { name: /Orderby/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
