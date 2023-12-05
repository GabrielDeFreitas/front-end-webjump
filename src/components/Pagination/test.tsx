import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from '.'

describe('<Pagination />', () => {
  it('should render pagination buttons', () => {
    const onPageChangeMock = jest.fn()

    render(
      <Pagination
        currentPage={1}
        totalItems={20}
        itemsPerPage={8}
        onPageChange={onPageChangeMock}
      />
    )

    const prevButton = screen.getByRole('button', { name: /previous page/i })
    const nextButton = screen.getByRole('button', { name: /next page/i })

    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()

    fireEvent.click(nextButton)
    expect(onPageChangeMock).toHaveBeenCalledWith(2)

    fireEvent.click(prevButton)
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
  })
})
