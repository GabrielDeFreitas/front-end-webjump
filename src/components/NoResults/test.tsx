import { render, screen } from '@testing-library/react'

import NoResults from '.'

describe('<NoResults />', () => {
  it('should render the heading', () => {
    const { container } = render(<NoResults />)

    expect(screen.getByRole('heading', { name: /NoResults/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
