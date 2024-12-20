import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
}
