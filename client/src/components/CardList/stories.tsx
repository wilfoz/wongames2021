import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CardListProps } from '.'
import mockGameItem from './mock'

export default {
  title: 'CardList',
  component: CardList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  args: {
    items: mockGameItem,
    total: 'R$ 415,00'
  }
} as Meta

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} />
  </div>
)
