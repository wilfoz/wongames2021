import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    // verificar o title se foi renderizado
    expect(
      screen.getByRole('heading', { name: /red Dead Redemption 2/i })
    ).toBeInTheDocument()
    // verificar a imagem
    expect(
      screen.getByRole('img', { name: /red Dead Redemption 2/i })
    ).toHaveAttribute('src', props.img)
    // verificar o preço
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https:://link'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2021 at 20:20'
    }
    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
