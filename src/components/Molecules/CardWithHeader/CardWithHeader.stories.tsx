// src/components/Molecules/CardWithHeader/CardWithHeader.stories.tsx
import React from 'react'
import CardWithHeader from './CardWithHeader'
import Box from '../../Atoms/Box/Box'

export default {
  title: 'Molecules/CardWithHeader',
  component: CardWithHeader,
  argTypes: {
    headerText: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    children: { control: 'none' },
  },
}

export const Default = (args) => (
  <CardWithHeader {...args}>
    <Box backgroundColor="#ddd" height="100%">
      This is the content inside the card.
    </Box>
  </CardWithHeader>
)

Default.args = {
  headerText: 'Sticky Header',
  width: '400px',
  height: '600px',
}
