import { render, screen } from '@testing-library/react'
import Orderby, { OrderbyProps } from '.'

describe('<Orderby />', () => {
  const mockHandleOrderBy: OrderbyProps['handleOrderBy'] = (criteria) => {
    //
  }

  it('should render the component', () => {
    render(<Orderby handleOrderBy={mockHandleOrderBy} />)

    expect(
      screen.getByRole('heading', { name: /Orderby/i })
    ).toBeInTheDocument()
    //
  })
})
