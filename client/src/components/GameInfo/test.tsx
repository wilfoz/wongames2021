import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game title',
  description: 'My game description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)
    // esperar por um heading (title)
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    // esperar por description
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    // esperar pelo price
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar button add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
