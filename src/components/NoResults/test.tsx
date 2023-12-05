import { render, screen } from '@testing-library/react'
import NoResults from '.'

describe('<NoResults />', () => {
  it('should render the "Pesquisa não encontrada" title', () => {
    render(<NoResults />)

    const titleElement = screen.getByText(/Pesquisa não encontrada/i)

    expect(titleElement).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<NoResults />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
