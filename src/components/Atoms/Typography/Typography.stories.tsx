// src/components/Typography/Typography.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'body1',
        'body2',
        'caption1',
        'caption2',
        'caption3',
        'stickyHeader',
      ],
    },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'body1',
  children: 'This is a Typography component',
  color: '#000000',
};

export const AllVariants = () => (
  <div>
    <Typography variant="h1" color="#333">Heading 1</Typography>
    <Typography variant="h2" color="#555">Heading 2</Typography>
    <Typography variant="h3" color="#777">Heading 3</Typography>
    <Typography variant="h4" color="#999">Heading 4</Typography>
    <Typography variant="h5" color="#bbb">Heading 5</Typography>
    <Typography variant="body1" color="#000">Body 1</Typography>
    <Typography variant="body2" color="#222">Body 2</Typography>
    <Typography variant="caption1" color="#444">Caption 1</Typography>
    <Typography variant="caption2" color="#666">Caption 2</Typography>
    <Typography variant="caption3" color="#888">Caption 3</Typography>
  </div>
);
