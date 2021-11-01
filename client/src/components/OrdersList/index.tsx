import Heading from 'components/Heading'
import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'
import Empty from 'components/Empty'

export type OrderListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My Orders
    </Heading>
    {items.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
