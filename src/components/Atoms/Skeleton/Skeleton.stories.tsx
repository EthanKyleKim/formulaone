import { Meta, StoryFn } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['circle', 'block'],
      },
    },
    size: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Circle = Template.bind({})
Circle.args = {
  type: 'circle',
  size: '50px',
}

export const Block = Template.bind({})
Block.args = {
  type: 'block',
  width: '200px',
  height: '16px',
}
