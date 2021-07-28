import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const navigation = Template.bind({});
