import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Navigation from './Navigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  nextRouter: {
    Provider: RouterContext.Provider,
  },
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const navigation = Template.bind({});
Template.args = {
  nextRouter: {
    path: '/',
  },
};
