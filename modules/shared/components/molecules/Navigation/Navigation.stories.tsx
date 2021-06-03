import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';
import type { INavigation } from './INavigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
} as Meta;

const Template: Story<INavigation.IProps> = (args) => <Navigation {...args} />;

export const navigation = Template.bind({});
