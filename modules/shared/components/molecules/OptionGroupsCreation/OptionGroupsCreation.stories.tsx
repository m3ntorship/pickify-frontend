import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroupsCreation from './OptionGroupsCreation';

export default {
  title: 'Molecules/OptionGroupsCreation',
  component: OptionGroupsCreation,
} as Meta;

const Template: Story = (args) => <OptionGroupsCreation {...args} />;

export const Default = Template.bind({});
