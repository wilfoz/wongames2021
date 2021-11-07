import Button from 'components/Button'
import Link from 'next/link'
import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CardListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CardList = ({ items, total, hasButton = false }: CardListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CardList
