import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroups from './OptionGroups';
import type { IOptionGroups } from './IOptionGroups';

export default {
  title: 'Molecules/OptionGroups',
  component: OptionGroups,
} as Meta;

const Template: Story<IOptionGroups.IProps> = (args) => (
  <OptionGroups {...args} />
);

export const Default = Template.bind({});
