import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the description', () => {
    const description =
      'A simple project starter to work with TypeScript, React, NextJS and Styled Components'
    render(<Main description={description} />)

    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('should render the image with the correct alt attribute', () => {
    const altText = 'A developer facing a screen with code.'
    render(<Main />)

    const image = screen.getByAltText(altText)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/img/hero-illustration.svg')
  })
})
