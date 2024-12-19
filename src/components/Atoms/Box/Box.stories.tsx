// src/components/Atoms/Box/Box.stories.tsx
import React from 'react'
import { Meta, StoryFn } from '@storybook/react';
import Box from './Box'

export default {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    top: { control: 'text' },
    bottom: { control: 'text' },
    left: { control: 'text' },
    right: { control: 'text' },
    zIndex: { control: 'text' },
    position: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'text' },
    borderTopRadius: { control: 'text' },
    borderBottomRadius: { control: 'text' },
    boxShadow: { control: 'text' },
    display: { control: 'text' },
    gap: { control: 'text' },
    flexDirection: { control: 'text' },
    justifyContent: { control: 'text' },
    alignItems: { control: 'text' },
    textAlign: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    overflow: { control: 'text' },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    flexWrap: { control: 'text' },
    boxShadowHover: { control: 'text' },
    transformHover: { control: 'text' },
    transition: { control: 'text' },
    zoom: { control: 'text' }
  },
} as Meta

const Template: StoryFn = (args) => <Box {...args}>이것은 Box Component 입니다.</Box>

export const Default = Template.bind({})
Default.args = {
  borderRadius: '9px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'auto',
  padding: '15px',
  backgroundColor: '#f0f0f0',
}