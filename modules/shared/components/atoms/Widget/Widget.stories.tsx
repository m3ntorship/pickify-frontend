import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Widget from './Widget';

export default {
  title: 'Atoms/Widget',
  component: Widget,
} as Meta;

const Template: Story = (args) => (
  <Widget {...args}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Widget>
);

export const widget = Template.bind({});
