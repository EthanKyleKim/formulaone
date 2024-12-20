import React from 'react'
import StickyTitleWithCard from './StickyTitleWithCard'
import Box from '../../Atoms/Box/Box'

export default {
  title: 'Molecules/StickyTitleWithCard',
  component: StickyTitleWithCard,
  argTypes: {
    headerText: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    children: { control: 'none' },
  },
}

export const Default = (args) => (
  <StickyTitleWithCard {...args}>
    <Box backgroundColor="#ddd" height="100%">
      This is the content inside the card.
    </Box>
  </StickyTitleWithCard>
)

Default.args = {
  headerText: 'Sticky Header',
  width: '400px',
  height: '600px',
}
