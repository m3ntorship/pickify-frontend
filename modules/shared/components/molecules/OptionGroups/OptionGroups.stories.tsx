import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroups from './OptionGroups';

export default {
  title: 'Molecules/OptionGroups',
  component: OptionGroups,
} as Meta;

const Template: Story = (args) => <OptionGroups {...args} />;

export const Default = Template.bind({});
