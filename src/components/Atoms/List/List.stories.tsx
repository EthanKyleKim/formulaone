// src/components/Atoms/List/List.stories.tsx
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { List, ListItem } from './List'

export default {
  title: 'Atoms/List',
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    flexDirection: {
      control: 'select',
      options: ['row', 'column'],
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
    display: {
      control: 'select',
      options: ['flex', 'block', 'inline-block'],
    },
  },
} as Meta

const ListTemplate: StoryFn<typeof List> = (args) => (
  <List {...args}>
    <ListItem width="100px" height="50px" isSelected={false}>
      Item 1
    </ListItem>
    <ListItem width="100px" height="50px" isSelected={true}>
      Item 2
    </ListItem>
    <ListItem width="100px" height="50px" isSelected={false}>
      Item 3
    </ListItem>
  </List>
)

export const Default = ListTemplate.bind({})
Default.args = {
  flexDirection: 'row',
  alignItems: 'center',
  display: 'flex',
}

export const ColumnLayout = ListTemplate.bind({})
ColumnLayout.args = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  display: 'flex',
}
