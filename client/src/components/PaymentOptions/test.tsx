import { screen, waitFor } from '@testing-library/react'
import cards from './mock'

import PaymentOptions from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/5005/)).toBeInTheDocument()
    expect(screen.getByLabelText(/5455/)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByText(/5005/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /5005/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByText(/5005/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
