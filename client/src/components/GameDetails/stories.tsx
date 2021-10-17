import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['mac', 'linux', 'windows']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['mac', 'linux', 'windows']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
